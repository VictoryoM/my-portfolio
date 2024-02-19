import * as React from "react";

interface EmailSendProps {
  subject: string;
  message: string;
}

export const EmailSend: React.FC<Readonly<EmailSendProps>> = ({
  subject,
  message,
}) => (
  <>
    <h1>{subject}</h1>
    <p>Thank you for contacting me!</p>
    <p>New message submitted:</p>
    <p>{message}</p>
  </>
);
