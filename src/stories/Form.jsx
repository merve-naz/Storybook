import React, { useState } from 'react';
import { TextInput, PasswordInput, Button, Container, Group, Paper, Title, Stack, Center } from '@mantine/core';

export const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Center >
      <Container size='xl' bg="var(--mantine-color-blue-light)" >
        <Title align="center" sx={{ fontFamily: 'Greycliff CF, sans-serif', fontWeight: 700 }}>
          Welcome Back!
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={handleSubmit}>
            <Stack spacing="md">
              <TextInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                size="lg" // Input boyutunu büyütüyoruz
                style={{ fontSize: '20px', width: '100%' }} // Font boyutunu büyütüp genişliği ayarlıyoruz
                data-testid="email"
              />
              <PasswordInput
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                size="lg" // Input boyutunu büyütüyoruz
                style={{ fontSize: '20px', width: '100%' }} // Font boyutunu büyütüp genişliği ayarlıyoruz
                data-testid="password"
              />
              <Group position="center">
                <Button type="submit" size="lg">
                  Login
                </Button>
              </Group>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Center>
  );
};
