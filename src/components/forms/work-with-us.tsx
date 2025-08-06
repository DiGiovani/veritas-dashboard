"use client";

import { sendContact } from "@/actions/work-with-us";
import { useIsMobile } from "@/hooks/use-mobile";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { FileInput } from "../ui/file-input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const fileSizeLimit = 5 * 1024 * 1024;
export const DOCUMENT_SCHEMA = z
  .instanceof(File)
  .refine(
    (file) =>
      [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type),
    {
      message: "O arquivo deve ser um PDF ou DOCX.",
    }
  )
  .refine((file) => file.size <= fileSizeLimit, {
    message: "O tamanho do arquivo não deve ser maior que 5MB",
  });

export const workWithUsFormSchema = z.object({
  name: z.string().min(2).max(200),
  interestArea: z.string().min(2).max(200),
  email: z.string().email(),
  phone: z.string().min(2).max(15),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  address: z.string().min(2).max(200),
  neighborhood: z.string().min(2).max(100),
  postalCode: z.string().min(2).max(10),
  message: z.string().min(2).max(200),
  curriculum: DOCUMENT_SCHEMA,
});

export function WorkWithUsForm() {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof workWithUsFormSchema>>({
    resolver: zodResolver(workWithUsFormSchema),
    defaultValues: {
      name: "",
      interestArea: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      address: "",
      neighborhood: "",
      postalCode: "",
      message: "",
      curriculum: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof workWithUsFormSchema>) {
    console.log("Im being called");
    setIsLoading(true);
    sendContact(values)
      .then(() => {
        toast("Contato enviado com sucesso!", {
          icon: <Check className="h-4 w-4" />,
        });
        form.reset();
      })
      .catch((error) => {
        toast(
          "Falha ao enviar contato. Por favor, tente novamente mais tarde.",
          {
            icon: <X className="h-4 w-4" />,
          }
        );
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full px-4 md:max-w-2/3"
      >
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row justify-between gap-4"
          }`}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input placeholder="Nome completo" {...field} />
                </FormControl>
                <FormDescription>Informe seu nome completo</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interestArea"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Área de interesse</FormLabel>
                <FormControl>
                  <Input placeholder="Área de interesse" {...field} />
                </FormControl>
                <FormDescription>
                  Informe a área que você deseja atuar
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row justify-between gap-4"
          }`}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                  Informe o melhor email para contato
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="+ 55 (99) 9 9999-9999" {...field} />
                </FormControl>
                <FormDescription>
                  Informe um telefone para contato
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row justify-between gap-4"
          }`}
        >
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input placeholder="Cidade" {...field} />
                </FormControl>
                <FormDescription>
                  A cidade em que você reside atualmente
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Input placeholder="Estado" {...field} />
                </FormControl>
                <FormDescription>
                  O estado da cidade preenchida no campo anterior
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row justify-between gap-4"
          }`}
        >
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Endereço</FormLabel>
                <FormControl>
                  <Input placeholder="Endereço" {...field} />
                </FormControl>
                <FormDescription>
                  O endereço em que o você reside atualmente
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row justify-between gap-4"
          }`}
        >
          <FormField
            control={form.control}
            name="neighborhood"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Bairro</FormLabel>
                <FormControl>
                  <Input placeholder="Bairro" {...field} />
                </FormControl>
                <FormDescription>
                  O bairro em que você reside atualmente
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Código Postal</FormLabel>
                <FormControl>
                  <Input placeholder="Código Postal" {...field} />
                </FormControl>
                <FormDescription>
                  O código postal da sua residência
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Experiência profissional</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-36"
                  placeholder="Cargo: Vigilante Patrimonial; Empresa: Veritas; Período: Jan 2020 - Dez 2023; Descrição: Responsável pela segurança e controle de acesso em instalações comerciais, realizando rondas periódicas e monitoramento por CFTV para garantir a proteção do patrimônio e a integridade física dos colaboradores."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                [{field.value?.length || 0}/500] Descreva brevemente suas
                últimas experiências profissionais.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="curriculum"
          render={({ field }) => (
            <FileInput
              field={field}
              label="Currículo"
              description="O seu currículo mais atualizado"
              accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
          )}
        />

        {/* <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();

            onSubmit(form.getValues());
          }}
          className="dark:text-white cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando contato
            </>
          ) : (
            "Enviar contato"
          )}
        </Button> */}
        <Button
          type="submit"
          // onClick={(e) => {
          //   e.preventDefault();

          //   onSubmit(form.getValues());
          // }}
          className="dark:text-white cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando contato
            </>
          ) : (
            "Enviar contato"
          )}
        </Button>
      </form>
    </Form>
  );
}
