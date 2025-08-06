import { File, UploadCloud, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";

interface FileInputProps<T extends FieldValues> {
  field: ControllerRenderProps<T>;
  label: string;
  description: string;
  accept: string;
}

//  File Input Component
export function FileInput<T extends FieldValues>({
  field,
  label,
  description,
  accept,
}: FileInputProps<T>) {
  const { name, onChange, onBlur, ref } = field;
  // Initialize selectedFile state from the field's value
  const [selectedFile, setSelectedFile] = useState<File | null>(
    field.value || null
  );
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Handle file selection from the input element
  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    onChange(file); // This updates the form state in react-hook-form
  };

  // Trigger the hidden file input when the dropzone is clicked
  const handleDropzoneClick = () => {
    inputRef.current?.click();
  };

  // Clear the selected file
  const handleClearFile: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation(); // Prevent triggering the dropzone click
    setSelectedFile(null);
    onChange(null); // Clear the form state
    if (inputRef.current) {
      inputRef.current.value = ""; // Reset the file input element
    }
  };

  // --- Drag and Drop Handlers ---
  const handleDragEnter: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      onChange(file);
    }
  };

  // Determine the border color based on the dragging state
  const dropzoneClasses = `
    flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-lg cursor-pointer
    transition-colors duration-200 ease-in-out
    ${
      isDragging
        ? "border-white bg-gray-800/80"
        : "border-gray-600 hover:border-gray-400 hover:bg-zinc-800"
    }
  `;

  return (
    <FormItem className="w-full">
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <div>
          {/* Hidden file input */}
          <Input
            type="file"
            accept={accept}
            multiple={false}
            onChange={handleFileChange}
            onBlur={onBlur}
            name={name}
            ref={(e) => {
              ref(e); // from react-hook-form
              inputRef.current = e;
            }}
            className="hidden"
          />

          {/* If a file is NOT selected, show the dropzone */}
          {!selectedFile ? (
            <div
              className={dropzoneClasses}
              onClick={handleDropzoneClick}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-500" />
                <p className="mt-2 text-sm text-gray-400">
                  <span className="font-semibold text-white">
                    Clique para enviar
                  </span>{" "}
                  ou arraste e solte
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  PDF, DOC, DOCX (max. 10MB)
                </p>
              </div>
            </div>
          ) : (
            // If a file IS selected, show the file info
            <div className="flex items-center justify-between w-full p-4 border-2 border-solid border-gray-600 bg-zinc-800 rounded-lg">
              <div className="flex items-center gap-3 overflow-hidden">
                <File className="h-6 w-6 text-gray-400 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-200 truncate">
                  {selectedFile.name}
                </span>
              </div>
              <button
                type="button"
                onClick={handleClearFile}
                className="p-1 text-gray-500 rounded-full hover:bg-gray-700 hover:text-white transition-colors flex-shrink-0"
                aria-label="Remover arquivo"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}
