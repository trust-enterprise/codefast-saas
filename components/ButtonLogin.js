import Link from "next/link";
const ButtonLogin = ({ isLoggedIn, username, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome {username}
      </Link>
    );
  }
  return <button>Login</button>;
};

export default ButtonLogin;
