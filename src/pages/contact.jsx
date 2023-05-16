import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters long'),
  subject: yup
    .string()
    .required('Subject is required')
    .min(3, 'Subject must be at least 3 characters long'),
  email: yup
    .string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  body: yup
    .string()
    .required('Body is required')
    .min(3, 'Body must be at least 3 characters long'),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <h1>Contact Us</h1>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor='fullName'>Full Name*</label>
            <input
              type='text'
              id='fullName'
              {...register('fullName')}
              style={{ width: '100%' }}
            />
            {errors.fullName && (
              <ErrorMessage>{errors.fullName.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor='subject'>Subject*</label>
            <input
              type='text'
              id='subject'
              {...register('subject')}
              style={{ width: '100%' }}
            />
            {errors.subject && (
              <ErrorMessage>{errors.subject.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor='email'>Email*</label>
            <input
              type='email'
              id='email'
              {...register('email')}
              style={{ width: '100%' }}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor='body'>Body*</label>
            <textarea
              id='body'
              rows={4}
              cols={40}
              {...register('body')}
              style={{ width: '100%' }}></textarea>
            {errors.body && <ErrorMessage>{errors.body.message}</ErrorMessage>}
          </InputContainer>
          <Button type='submit'>Submit</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default ContactPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const FormContainer = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 50%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const Button = styled.button`
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #303f9f;
  }
`;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     subject: '',
//     email: '',
//     body: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (validate()) {
//       console.log(formData);
//     }
//   };

//   const validate = () => {
//     let newErrors = {};
//     if (formData.fullName.length < 3) {
//       newErrors.fullName = 'Full name must be at least 3 characters long';
//     }
//     if (formData.subject.length < 3) {
//       newErrors.subject = 'Subject must be at least 3 characters long';
//     }
//     if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = 'Email must be a valid email address';
//     }
//     if (formData.body.length < 3) {
//       newErrors.body = 'Body must be at least 3 characters long';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   return (
//     <Container>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <InputContainer>
//           <label htmlFor='fullName'>Full Name*</label>
//           <input
//             type='text'
//             id='fullName'
//             name='fullName'
//             value={formData.fullName}
//             onChange={handleChange}
//           />
//           {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
//         </InputContainer>
//         <InputContainer>
//           <label htmlFor='subject'>Subject*</label>
//           <input
//             type='text'
//             id='subject'
//             name='subject'
//             value={formData.subject}
//             onChange={handleChange}
//           />
//           {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
//         </InputContainer>
//         <InputContainer>
//           <label htmlFor='email'>Email*</label>
//           <input
//             type='email'
//             id='email'
//             name='email'
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
//         </InputContainer>
//         <InputContainer>
//           <label htmlFor='body'>Body*</label>
//           <textarea
//             id='body'
//             name='body'
//             value={formData.body}
//             onChange={handleChange}></textarea>
//           {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}
//         </InputContainer>
//         <Button type='submit'>Submit</Button>
//       </form>
//     </Container>
//   );
// };

// export default ContactPage;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 10px;
// `;

// const ErrorMessage = styled.span`
//   color: red;
// `;

// const Button = styled.button`
//   background-color: #3f51b5;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   margin-top: 20px;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background-color: #303f9f;
//   }
// `;
