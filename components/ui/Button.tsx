import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'line';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl focus:ring-orange-500 border border-transparent",
    secondary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md focus:ring-emerald-500 border border-transparent",
    outline: "bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50 focus:ring-orange-500",
    line: "bg-[#06C755] hover:bg-[#05b34d] text-white shadow-lg hover:shadow-xl focus:ring-[#06C755] border border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};