"use client";

import { sendContact } from "@/actions/send-contact";
import { useIsMobile } from "@/hooks/use-mobile";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const contactFormSchema = z.object({
  name: z.string().min(2).max(200),
  company: z.string().min(2).max(200),
  email: z.string().email(),
  phone: z.string().min(2).max(15),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  activity: z.string().min(2).max(200),
  message: z.string().min(2).max(500),
});

export function ContactForm() {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      activity: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
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
            name="company"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Empresa" {...field} />
                </FormControl>
                <FormDescription>Informe o nome de sua empresa</FormDescription>
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
                  A cidade em que o serviço será prestado
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
        <FormField
          control={form.control}
          name="activity"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Ramo de Atividade</FormLabel>
              <FormControl>
                <Input placeholder="Atividade" {...field} />
              </FormControl>
              <FormDescription>
                O ramo de atividade de sua empresa
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Ramo de Atividade</FormLabel>
              <FormControl>
                <Textarea placeholder="Atividade" {...field} />
              </FormControl>
              <FormDescription>
                [{field.value?.length || 0}/500] Descreva brevemente os detalhes
                do seu projeto
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="dark:text-white">
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
