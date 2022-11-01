import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const WriteNowValidationSchema = yup.object({
  destinationName: yup.string().required('Preencha o nome completo'),
  destinationAddress: yup
    .string()
    .email('Preencha um e-mail válido')
    .required('Preencha o e-mail'),
  subject: yup.string().required('Digite o assunto do email'),
  body: yup.string().required('Insira o conteúdo do e-mail'),
});

export const WriteNowResolver = yupResolver(WriteNowValidationSchema);
