import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const SignUpPage: React.FC = () => {
  console.log('SignUpPage loaded');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(''); // Clear previous errors

    // --- Placeholder for sign-up logic ---
    const formData = new FormData(event.currentTarget);
    const fullName = formData.get('full-name');
    const email = formData.get('email');
    const password = formData.get('password');

    if (!fullName || !email || !password) {
      setError('All fields are required. Please fill out the entire form.');
      return;
    }
    
    // Simulate API call and success
    console.log('Simulating account creation for:', { fullName, email });
    // In a real app, you would navigate on success.
    // For now, we'll just log it. A toast notification would be good here.
    // For example: navigate('/dashboard'); after successful signup.
    // Since no dashboard exists, we can navigate back to login as a demo.
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <AuthFormCard
          title="Create an Account"
          description="Enter your details below to join SwiftSecure."
          footerContent={
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                Sign In
              </Link>
            </div>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Registration Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="grid gap-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                name="full-name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                name="password"
                type="password" 
                placeholder="••••••••" 
                required 
              />
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </AuthFormCard>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;