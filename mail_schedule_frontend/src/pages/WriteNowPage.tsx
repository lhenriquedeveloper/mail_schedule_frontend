import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../components/Button/Button';
import { DateTimePicker } from '../components/Form/DateTimePicker';
import { RichInput } from '../components/Form/RichInput';
import { Nav } from '../components/Nav/Nav';
import { IWriteForm } from '../interfaces/IWriteNowForm';
import { WriteNowResolver } from '../validations/WriteNowValidation';

export function WriteNowPage() {
  const formMethods = useForm<IWriteForm>({ resolver: WriteNowResolver });
  const {
    formState: { errors },
    register,
  } = formMethods;

  function sendEmail(e: any) {
    e.preventDefault();
  }

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever Agora</h1>

        <FormProvider {...formMethods}>
          <form className="form" onSubmit={sendEmail}>
            {/* //Nome Completo */}
            <label htmlFor="destinationName">Nome do Destinatário:</label>
            <input {...register('destinationName')} type="text" />
            {errors?.destinationName?.message && (
              <p className="error-text">{errors?.destinationName?.message}</p>
            )}
            {/* //E-Mail */}
            <label htmlFor="destinationAddress">E-mail:</label>
            <input {...register('destinationAddress')} type="email" />
            {errors?.destinationAddress?.message && (
              <p className="error-text">
                {errors?.destinationAddress?.message}
              </p>
            )}
            {/* //Assunto */}
            <label htmlFor="subject">Assunto:</label>
            <input {...register('subject')} type="text" />
            {errors?.subject?.message && (
              <p className="error-text">{errors?.subject?.message}</p>
            )}
            {/* //Mensagem */}
            <label htmlFor="body">Mensagem: </label>
            <RichInput name="body" />
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
