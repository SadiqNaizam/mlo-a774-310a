import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthFormCardProps {
  /**
   * The main title for the authentication form (e.g., "Sign In" or "Create Account").
   */
  title: string;
  /**
   * An optional description or subtitle displayed below the main title.
   */
  description?: string;
  /**
   * The main content of the form, typically including input fields and the primary action button.
   */
  children: React.ReactNode;
  /**
   * Optional content to be displayed in the footer of the card, ideal for links like "Forgot Password?" or social login buttons.
   */
  footerContent?: React.ReactNode;
}

/**
 * A reusable card component that provides a consistent container for authentication forms.
 * It standardizes the layout with a title, content area, and an optional footer.
 */
const AuthFormCard: React.FC<AuthFormCardProps> = ({ title, description, children, footerContent }) => {
  console.log('AuthFormCard loaded');

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        {description && (
          <CardDescription>
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {footerContent && (
        <CardFooter className="flex flex-col items-center space-y-4">
          {footerContent}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthFormCard;