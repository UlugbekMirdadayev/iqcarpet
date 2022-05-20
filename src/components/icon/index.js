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
    style={liked ? { fill: "#0052B9" } : {}}
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

// export const Arrow = ({ className = "icon", ...props }) => (
//   <svg
//     width="12"
//     height="8"
//     viewBox="0 0 12 8"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M10.6673 1.50024L6.00065 6.75024L1.33398 1.50024"
//       stroke="black"
//       stroke-width="1.5"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//     />
//   </svg>
// );
