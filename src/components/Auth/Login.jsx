import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ handleLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleLogin(data.email, data.pass);
  };

  return (
    <div className="relative flex h-screen w-screen items-center justify-center
                    bg-gradient-to-br from-indigo-900 to-purple-800 overflow-hidden">
      
      {/* Floating abstract shapes */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px]
                      bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px]
                      bg-indigo-700 opacity-40 rounded-full blur-2xl"></div>

      {/* Login Card */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-[2px] rounded-3xl shadow-2xl">
        <div className="backdrop-blur-xl bg-slate-900/70 rounded-3xl p-16 w-[400px]">
          
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Welcome Back
          </h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

            {/* Email */}
            <input
              {...register("email", {
                required: "Email is required",
                minLength: { value: 4, message: "Min length at least 4" },
              })}
              className="w-full outline-none bg-slate-800 border border-slate-700
                         text-lg py-3 px-5 rounded-xl text-white placeholder-slate-400
                         focus:ring-2 focus:ring-purple-500 transition"
              type="email"
              placeholder="Enter Email"
            />
            {errors.email && (
              <p className="text-rose-400 text-sm">{errors.email.message}</p>
            )}

            {/* Password */}
            <input
              {...register("pass", {
                required: "Password is required",
                minLength: { value: 3, message: "Min length at least 3" },
                maxLength: { value: 6, message: "Max length at most 6" },
              })}
              className="w-full outline-none bg-slate-800 border border-slate-700
                         text-lg py-3 px-5 rounded-xl text-white placeholder-slate-400
                         focus:ring-2 focus:ring-purple-500 transition"
              type="password"
              placeholder="Enter Password"
            />
            {errors.pass && (
              <p className="text-rose-400 text-sm">{errors.pass.message}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="text-white text-lg py-3 rounded-xl
                         bg-gradient-to-r from-purple-500 to-indigo-500
                         hover:scale-[1.03] hover:shadow-xl
                         transition-all duration-300"
            >
              Log In
            </button>

          </form>

          <p className="text-slate-300 text-sm text-center mt-6">
            Access your account securely
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
