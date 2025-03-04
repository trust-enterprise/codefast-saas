import Link from "next/link";
const ButtonLogin = ({ isLoggedIn, username, children }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome {username}, click for Dashboard
      </Link>
    );
  }
  return <button>Login</button>;
};

export default ButtonLogin;
