import React from 'react';
import { Button } from "@/components/ui/button";
import { Chrome, Github } from "lucide-react";

/**
 * A component that displays a set of social login buttons.
 */
const SocialLoginButtons: React.FC = () => {
  console.log('SocialLoginButtons loaded');

  // Handler for Google login. In a real app, this would initiate the OAuth flow.
  const handleGoogleLogin = () => {
    console.log('"Sign in with Google" button clicked. Initiating OAuth flow...');
    // Example: window.location.href = '/auth/google';
  };

  // Handler for GitHub login. In a real app, this would initiate the OAuth flow.
  const handleGitHubLogin = () => {
    console.log('"Sign in with GitHub" button clicked. Initiating OAuth flow...');
    // Example: window.location.href = '/auth/github';
  };

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
      <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
        <Chrome className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button variant="outline" className="w-full" onClick={handleGitHubLogin}>
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  );
};

export default SocialLoginButtons;