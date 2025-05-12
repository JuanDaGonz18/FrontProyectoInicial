import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
