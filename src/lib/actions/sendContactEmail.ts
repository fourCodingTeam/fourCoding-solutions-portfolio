"use server";
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
      from: `accounts@fourcoding.com`,
      to: ["four4coding@gmail.com", "accounts@fourcoding.com"],
      subject: `Novo contato de ${nome}`,
      html: `
        <div style="font-family: 'DM Sans', 'Figtree', Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333333; text-align: left; font-family: 'DM Sans', 'Figtree', Arial, sans-serif;">📩 Novo Contato Recebido</h2>
          
          <p style="font-size: 16px; color: #555555;">
            <strong>Nome:</strong> ${nome}
          </p>
          
          <p style="font-size: 16px; color: #555555;">
            <strong>Email:</strong> ${email}
          </p>

          <p style="font-size: 16px; color: #555555; margin-top: 20px;">
            <strong>Mensagem:</strong>
          </p>
          <div style="font-size: 15px; color: #444444; background-color: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #dddddd; white-space: pre-line; font-family: 'DM Sans', 'Figtree', Arial, sans-serif;">
            ${mensagem}
          </div>

          <p style="font-size: 12px; color: #999999; text-align: center; margin-top: 30px; font-family: 'DM Sans', 'Figtree', Arial, sans-serif;">
            Este e-mail foi gerado automaticamente através do formulário de contato do site fourcoding.com
          </p>
        </div>
      `,
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return { success: false, error };
  }
}
