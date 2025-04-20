import type { FC } from "react"

interface ElmLogoProps {
  className?: string
  size?: number
}

export const ElmLogo: FC<ElmLogoProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Upside down tree */}
      <path d="M12 22V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 18C8 18 4 14 4 10C4 6 7 2 12 2C17 2 20 6 20 10C20 14 16 18 12 18Z" fill="currentColor" />
      <path d="M12 14C10 14 8 12 8 10C8 8 9 6 12 6C15 6 16 8 16 10C16 12 14 14 12 14Z" fill="white" />
      <path
        d="M12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10Z"
        fill="currentColor"
      />
    </svg>
  )
}
