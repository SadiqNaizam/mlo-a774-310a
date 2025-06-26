import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom Component Imports
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';
import SocialLoginButtons from '@/components/SocialLoginButtons';

// shadcn/ui Component Imports
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    console.log('Login attempt with:', { email, password });

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    // Placeholder for actual authentication logic
    // In a real application, you would make an API call here.
    // For demonstration, we'll just log and show a message.
    console.log('Authentication logic would run here.');
    setError('This is a demo. Login functionality is not implemented.');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormCard
          title="Sign In to Your Account"
          description="Enter your credentials below to access the application."
          footerContent={
            <>
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <SocialLoginButtons />
            </>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Authentication Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password" // Path from App.tsx
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me" className="text-sm font-normal text-muted-foreground">
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              {"Don't have an account?"}{' '}
              <Link
                to="/sign-up" // Path from App.tsx
                className="font-medium text-primary hover:underline"
              >
                Sign up
              </Link>
            </div>
          </form>
        </AuthFormCard>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;