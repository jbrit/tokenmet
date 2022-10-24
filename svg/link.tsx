import { SVGProps } from "react";

export function Link(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="28" fill="#161B22" />
      <path
        d="M37.4444 29.2222V36.5556C37.4444 37.2039 37.1752 37.8256 36.6959 38.284C36.2167 38.7425 35.5667 39 34.8889 39H19.5556C18.8778 39 18.2278 38.7425 17.7485 38.284C17.2692 37.8256 17 37.2039 17 36.5556V21.8889C17 21.2406 17.2692 20.6188 17.7485 20.1604C18.2278 19.702 18.8778 19.4444 19.5556 19.4444H27.2222V21.8889H19.5556V36.5556H34.8889V29.2222H37.4444ZM29.7778 17V19.4444H35.6377L25.6799 28.9692L27.4867 30.6974L37.4444 21.1727V26.7778H40V17H29.7778Z"
        fill="#818387"
      />
    </svg>
  );
}
