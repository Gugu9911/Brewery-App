import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from '../misc/types';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const FormComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Form>();

    const onSubmit: SubmitHandler<Form> = data => {
        console.log(data);
        alert(`Thank you, ${data.username}!`);
    };

    return (
        <Container maxWidth="sm" sx={{ bgcolor: '#e0ffcd', p: 3, borderRadius: 1, boxShadow: 3, marginTop: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Feedback Form
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <TextField
                    fullWidth
                    id="username"
                    label="Username"
                    margin="normal"
                    {...register('username', { required: "This field is required" })}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />
                <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    type="email"
                    margin="normal"
                    {...register('email', { required: "This field is required and must be a valid email address", pattern: /^\S+@\S+\.\S+$/ })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    fullWidth
                    id="phone"
                    label="Phone (Optional)"
                    type="tel"
                    margin="normal"
                    {...register('phone')}
                />
                <TextField
                    fullWidth
                    id="feedback"
                    label="Feedback"
                    multiline
                    rows={4}
                    margin="normal"
                    {...register('feedback', { required: "This field is required" })}
                    error={!!errors.feedback}
                    helperText={errors.feedback?.message}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, bgcolor:'#ffcab0'}}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default FormComponent;
