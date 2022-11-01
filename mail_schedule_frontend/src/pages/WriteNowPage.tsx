import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../components/Button/Button';
import { Nav } from '../components/Nav/Nav';
import { IWriteForm } from '../interfaces/IWriteNowForm';
import { WriteNowResolver } from '../validations/WriteNowValidation';
import emailjs from 'emailjs-com';

export function WriteNowPage() {
  const formMethods = useForm<IWriteForm>({ resolver: WriteNowResolver });
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = formMethods;

  function sendEmail(data: IWriteForm, e: any) {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_ID
      )
      .then(
        (result) => {
          alert('Message Sent, We will get back to you shortly');
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    console.log(data);
  }

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever Agora</h1>

        <FormProvider {...formMethods}>
          <form className="form" onSubmit={handleSubmit(sendEmail)}>
            {/* //Nome Completo */}
            <label htmlFor="destinationName">Nome do Remetente:</label>
            <input
              {...register('destinationName')}
              type="text"
              placeholder="Digite o nome do remetente"
            />
            {errors?.destinationName?.message && (
              <p className="error-text">{errors?.destinationName?.message}</p>
            )}
            {/* //E-Mail */}
            <label htmlFor="destinationAddress">E-mail:</label>
            <input
              {...register('destinationAddress')}
              type="email"
              placeholder="Digite o email do Destinatário"
            />
            {errors?.destinationAddress?.message && (
              <p className="error-text">
                {errors?.destinationAddress?.message}
              </p>
            )}
            {/* //Assunto */}
            <label htmlFor="subject">Assunto:</label>
            <input
              {...register('subject')}
              type="text"
              placeholder="Digite o assunto do Email"
            />
            {errors?.subject?.message && (
              <p className="error-text">{errors?.subject?.message}</p>
            )}
            {/* //Mensagem */}
            <label htmlFor="body">Mensagem: </label>
            <textarea {...register('body')} placeholder="Digite sua mensagem" />
            {errors?.body?.message && (
              <p className="error-text">{errors?.body?.message}</p>
            )}
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
