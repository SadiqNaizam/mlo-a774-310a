import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MailCheck, AlertCircle } from 'lucide-react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const ForgotPasswordPage = () => {
  console.log('ForgotPasswordPage loaded');

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would make an API call here.
    // For this example, we'll just simulate a success response.
    console.log('Password reset requested for:', email);

    if (email.includes('@')) {
        setMessage({
            type: 'success',
            text: `If an account with ${email} exists, a password reset link has been sent.`,
        });
    } else {
        setMessage({
            type: 'error',
            text: 'Please enter a valid email address.',
        });
    }

    setEmail(''); // Clear input after submission
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <AuthFormCard
          title="Forgot Your Password?"
          description="Enter your email below, and we'll send you a link to reset it."
          footerContent={
            <div className="text-sm">
              <Link to="/" className="font-medium text-primary hover:underline">
                Remembered your password? Sign In
              </Link>
            </div>
          }
        >
          {message ? (
            <Alert variant={message.type === 'error' ? 'destructive' : 'default'}>
              {message.type === 'success' ? <MailCheck className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <AlertTitle>{message.type === 'success' ? 'Check Your Email' : 'Error'}</AlertTitle>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          )}
        </AuthFormCard>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;