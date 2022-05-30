export const CatalogIcon = ({ className = "icon" }) => (
  <svg
    className={className}
    width="11"
    height="13"
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.91111 12.5H9.98928C10.4864 12.5 10.8894 12.1077 10.8894 11.6238C10.8894 11.1399 10.4864 10.7476 9.98928 10.7476H0.900133C0.403003 10.7476 0 11.1399 0 11.6238C0 12.1077 0.403003 12.5 0.900133 12.5H0.91111Z"
      fill="white"
    />
    <path
      d="M0.910854 7.38157H9.98902C10.3364 7.41885 10.675 7.25945 10.8607 6.97126C11.0464 6.68308 11.0464 6.31689 10.8607 6.0287C10.675 5.74052 10.3364 5.58111 9.98902 5.6184H0.899877C0.438128 5.66796 0.088623 6.04777 0.088623 6.49998C0.088623 6.9522 0.438128 7.33201 0.899877 7.38157H0.910854Z"
      fill="white"
    />
    <path
      d="M0.910863 2.26317H4.36869C4.83044 2.21361 5.17994 1.8338 5.17994 1.38159C5.17994 0.929368 4.83044 0.549563 4.36869 0.5H0.910863C0.449114 0.549563 0.0996094 0.929368 0.0996094 1.38159C0.0996094 1.8338 0.449114 2.21361 0.910863 2.26317V2.26317Z"
      fill="white"
    />
  </svg>
);

export const HeartIcon = ({ className = "icon" }) => (
  <svg
    className={className}
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.761 18.8538C8.5904 17.5179 6.57111 15.9456 4.73929 14.1652C3.45144 12.8829 2.47101 11.3198 1.8731 9.59539C0.797144 6.25031 2.05393 2.42083 5.57112 1.28752C7.41961 0.692435 9.43845 1.03255 10.9961 2.20148C12.5543 1.03398 14.5725 0.693978 16.4211 1.28752C19.9383 2.42083 21.2041 6.25031 20.1281 9.59539C19.5302 11.3198 18.5498 12.8829 17.2619 14.1652C15.4301 15.9456 13.4108 17.5179 11.2402 18.8538L11.0051 19L10.761 18.8538Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.7393 5.05298C15.8046 5.39328 16.5615 6.34968 16.6561 7.47496"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CartIcon = ({ className = "icon" }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.67692 19.8726C7.14454 19.8726 7.52462 20.2526 7.52462 20.7203C7.52462 21.1879 7.14454 21.5669 6.67692 21.5669C6.2093 21.5669 5.83032 21.1879 5.83032 20.7203C5.83032 20.2526 6.2093 19.8726 6.67692 19.8726Z"
      stroke="white"
      strokeWidth="1.66216"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.1478 19.8726C19.6154 19.8726 19.9955 20.2526 19.9955 20.7203C19.9955 21.1879 19.6154 21.5669 19.1478 21.5669C18.6801 21.5669 18.3 21.1879 18.3 20.7203C18.3 20.2526 18.6801 19.8726 19.1478 19.8726Z"
      stroke="white"
      strokeWidth="1.66216"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.5 1.51074L3.80486 1.90966L4.87197 14.623C4.9584 15.6591 5.82384 16.4547 6.86324 16.4547H18.9549C19.9478 16.4547 20.7899 15.7255 20.9329 14.7415L21.9845 7.47458C22.1141 6.57812 21.4193 5.77585 20.514 5.77585H4.17497"
      stroke="white"
      strokeWidth="1.66216"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1052 9.87144H17.1779"
      stroke="white"
      strokeWidth="1.66216"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SelectArrowIcon = ({ className = "icon" }) => (
  <svg
    className={className}
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6661 0.875L5.99943 6.125L1.33276 0.875"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LikeIcon = ({ className = "icon", liked = false, ...props }) => (
  <svg
    {...props}
    className={className}
    width={22}
    height={20}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={
      liked
        ? { fill: "#0052B9", transition: "200ms ease all" }
        : { fill: "#fff", transition: "200ms ease all" }
    }
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.761 18.8538C8.5904 17.5179 6.57111 15.9456 4.73929 14.1652C3.45144 12.8829 2.47101 11.3198 1.8731 9.59539C0.797144 6.25031 2.05393 2.42083 5.57112 1.28752C7.41961 0.692435 9.43845 1.03255 10.9961 2.20148C12.5543 1.03398 14.5725 0.693978 16.4211 1.28752C19.9383 2.42083 21.2041 6.25031 20.1281 9.59539C19.5302 11.3198 18.5498 12.8829 17.2619 14.1652C15.4301 15.9456 13.4108 17.5179 11.2402 18.8538L11.0051 19L10.761 18.8538Z"
      stroke="#0052B9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ArrowIcon = ({ className = "icon" }) => (
  <svg
    className={className}
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99968 5.02447L1 5.02447"
      stroke="#B3BCC5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.36987 1.41002L9.99974 5.02429L6.36987 8.63916"
      stroke="#B3BCC5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MenuIcon = ({ className = "icon", isOpen = false, ...props }) => (
  <>
    {!isOpen ? (
      <svg
        {...props}
        className={className}
        width="24px"
        height="24px"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.55997 2.73347H20.7599C21.2901 2.73347 21.7199 2.30366 21.7199 1.77347C21.7199 1.24328 21.2901 0.813477 20.7599 0.813477H1.55997C1.02978 0.813477 0.599976 1.24328 0.599976 1.77347C0.599976 2.30366 1.02978 2.73347 1.55997 2.73347Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7599 7.21338H1.56C1.02981 7.21338 0.600006 7.64318 0.600006 8.17337C0.600006 8.70356 1.02981 9.13337 1.56 9.13337H20.7599C21.2901 9.13337 21.7199 8.70356 21.7199 8.17337C21.7199 7.64318 21.2901 7.21338 20.7599 7.21338Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7599 13.6135H1.56C1.02981 13.6135 0.600006 14.0433 0.600006 14.5735C0.600006 15.1037 1.02981 15.5335 1.56 15.5335H20.7599C21.2901 15.5335 21.7199 15.1037 21.7199 14.5735C21.7199 14.0433 21.2901 13.6135 20.7599 13.6135Z"
          fill="white"
        />
      </svg>
    ) : (
      <svg
        {...props}
        className={className}
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
      </svg>
    )}
  </>
);
export const SearchIcon = ({ className = "icon", ...props }) => (
  <svg
    {...props}
    className={className}
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="9.76659"
      cy="9.76663"
      r="8.98856"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.0183 16.4851L19.5423 20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const CloseIcon = ({ className = "icon", ...props }) => (
  <svg
    {...props}
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.05037 3.05022L12.9499 12.9497"
      stroke="#0052B9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.9499 3.05029L3.05037 12.9498"
      stroke="#0052B9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const CheckBoxIcon = ({
  className = "icon",
  isChecked = true,
  ...props
}) => (
  <svg
    {...props}
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={isChecked ? "#0052b9" : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3345 0.750244H5.66549C2.64449 0.750244 0.750488 2.88924 0.750488 5.91624V14.0842C0.750488 17.1112 2.63549 19.2502 5.66549 19.2502H14.3335C17.3645 19.2502 19.2505 17.1112 19.2505 14.0842V5.91624C19.2505 2.88924 17.3645 0.750244 14.3345 0.750244Z"
      stroke={isChecked ? "#0052b9" : "#B3BCC5"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const FilterIcon = ({ className = "icon", ...props }) => (
  <svg
    {...props}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.7599 6.21376C7.7599 5.12681 6.86462 4.24192 5.76229 4.24192C4.66113 4.24192 3.76467 5.12681 3.76467 6.21376C3.76467 7.30072 4.66113 8.18561 5.76229 8.18561C6.86462 8.18561 7.7599 7.30072 7.7599 6.21376ZM9.52457 6.21376C9.52457 8.26109 7.83754 9.92753 5.76229 9.92753C3.68821 9.92753 2 8.26109 2 6.21376C2 4.16643 3.68821 2.5 5.76229 2.5C7.83754 2.5 9.52457 4.16643 9.52457 6.21376ZM22 6.214C22 5.73323 21.6047 5.34304 21.1177 5.34304H13.8825C13.3954 5.34304 13.0002 5.73323 13.0002 6.214C13.0002 6.69476 13.3954 7.08495 13.8825 7.08495H21.1177C21.6047 7.08495 22 6.69476 22 6.214ZM16.2397 17.7862C16.2397 18.8732 17.135 19.7581 18.2374 19.7581C19.3397 19.7581 20.235 18.8732 20.235 17.7862C20.235 16.6981 19.3397 15.8144 18.2374 15.8144C17.135 15.8144 16.2397 16.6981 16.2397 17.7862ZM14.4751 17.7862C14.4751 15.7377 16.1621 14.0725 18.2374 14.0725C20.3126 14.0725 21.9996 15.7377 21.9996 17.7862C21.9996 19.8336 20.3126 21.5 18.2374 21.5C16.1621 21.5 14.4751 19.8336 14.4751 17.7862ZM2.88316 16.9149H10.1172C10.6042 16.9149 10.9995 17.3051 10.9995 17.7859C10.9995 18.2667 10.6042 18.6568 10.1172 18.6568H2.88316C2.39611 18.6568 2.00082 18.2667 2.00082 17.7859C2.00082 17.3051 2.39611 16.9149 2.88316 16.9149Z"
      fill="black"
    />
  </svg>
);
export const SortIcon = ({ className = "icon", ...props }) => (
  <svg
    {...props}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.06557 2H19.9344C21.0805 2 22 2.94865 22 4.10925V5.65591C22 6.21954 21.7806 6.75971 21.3892 7.15434L14.6223 14.0153L14.6229 19.2104C14.6229 19.4468 14.5034 19.6646 14.3098 19.7925L14.2223 19.8416L9.77927 21.9327C9.31653 22.1505 8.78448 21.8129 8.78448 21.3015L8.78419 13.9995L2.55082 7.1262C2.23543 6.77915 2.04552 6.3356 2.00721 5.86773L2 5.69128V4.10925C2 2.94865 2.91954 2 4.06557 2ZM19.9346 3.39551H4.06573C3.70024 3.39551 3.39551 3.70989 3.39551 4.10947V5.6915C3.39551 5.87817 3.46341 6.05575 3.5841 6.18855L9.99911 13.2616C10.1155 13.3899 10.18 13.557 10.18 13.7303L10.1797 20.2013L13.2271 18.7679L13.2277 13.7303C13.2277 13.5836 13.2739 13.4417 13.3583 13.3239L13.4286 13.2404L20.3972 6.17346C20.5291 6.04044 20.6048 5.85407 20.6048 5.65613V4.10947C20.6048 3.70989 20.3001 3.39551 19.9346 3.39551Z"
      fill="black"
    />
  </svg>
);

export const Buy_Icon = ({ className = "icon" }) => (
  <svg
  className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.6722 17.5703C6.0942 17.5703 6.4372 17.9133 6.4372 18.3353C6.4372 18.7573 6.0942 19.0993 5.6722 19.0993C5.2502 19.0993 4.9082 18.7573 4.9082 18.3353C4.9082 17.9133 5.2502 17.5703 5.6722 17.5703Z"
      stroke="#0052B9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.9252 17.5703C17.3472 17.5703 17.6902 17.9133 17.6902 18.3353C17.6902 18.7573 17.3472 19.0993 16.9252 19.0993C16.5032 19.0993 16.1602 18.7573 16.1602 18.3353C16.1602 17.9133 16.5032 17.5703 16.9252 17.5703Z"
      stroke="#0052B9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 1L3.08 1.36L4.043 12.833C4.121 13.768 4.902 14.486 5.84 14.486H16.752C17.648 14.486 18.408 13.828 18.537 12.94L19.486 6.382C19.603 5.573 18.976 4.849 18.159 4.849H3.414"
      stroke="#0052B9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.376 8.54504H15.149"
      stroke="#0052B9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
