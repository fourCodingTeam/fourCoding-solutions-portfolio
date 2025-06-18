'use server'
import { resend } from "@/lib/resend";

interface SendContactEmailParams {
  nome: string;
  email: string;
  mensagem: string;
}

export async function sendContactEmail({
  nome,
  email,
  mensagem,
}: SendContactEmailParams) {
  try {
    const response = await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: ["four4coding@gmail.com"],
      subject: `Novo contato de ${nome}`,
      html: `
        <h1>Novo Contato</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return { success: false, error };
  }
}
