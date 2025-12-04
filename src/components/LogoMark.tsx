import { cn } from './ui/utils';

interface LogoMarkProps {
  className?: string;
  size?: number;
}

export function LogoMark({ className, size = 48 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('drop-shadow-[0_12px_24px_rgba(14,165,233,0.32)]', className)}
    >
      <defs>
        <linearGradient id="logo-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="transparent" stroke="url(#logo-ring)" strokeWidth="6" />
      <path
        d="M21.5 18c-1.381 0-2.5 1.119-2.5 2.5v20c0 2.761 2.239 5 5 5h20c2.761 0 5-2.239 5-5v-16c0-2.761-2.239-5-5-5h-2.5v-1.5a2.5 2.5 0 1 0-5 0V19h-5v-1.5a2.5 2.5 0 1 0-5 0V19H21.5Z"
        fill="url(#logo-ring)"
        opacity="0.85"
      />
      <path
        d="M25 33.5l7 7.5 11-12"
        fill="none"
        stroke="#F8FAFC"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
