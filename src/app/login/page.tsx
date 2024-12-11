import Footer from "@/components/footer";
import Header from "@/components/header";
import TopHeader from "@/components/topheader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="w-[1440px] ">
        <div className="w-[380px] h-[489px] flex flex-col  justify-center ml-[530px] ">
          <div className="flex items-center justify-center flex-col space-y-4">
            {/**top div */}
            <div className="w-[324px] h-[128px] flex flex-col space-y-3 items-center justify-center">
              <Image
                src={"/images/Vector.png"}
                alt="logo"
                width={65}
                height={35}
              />
              <p className="w-[186px] h-[57px] flex text-center font-bold text-xl ">
                YOUR ACCOUNT <br /> FOR EVERYTHING <br />
                NIKE
              </p>
            </div>
            <div className="w-[324px] h-[305px] space-y-3">
              <form className="border border-[#E5E5E5] ">
                <input
                  type="email"
                  placeholder="Email adress"
                  className="w-[324px] h-[40px] border-[#E5E5E5]"
                />
              </form>
              <form>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[324px] h-[40px] border border-[#E5E5E5]"
                />
              </form>
              <div className="flex mt-6 md:gap-x-16 ">
                <h1 className="text-[#8D8D8D] text-[12px] w-[162px] h-[20px] flex gap-2 items-center">
                  <input type="checkbox" />
                  Keep me signed In
                </h1>
                <p className="text-[#8D8D8D] text-xs w-[145px] h-[14px]">
                  Forgotten your password?
                </p>
              </div>
              <div className="flex flex-col justify-center items-center mt-5 w-[324px] h-[59px]">
                <p className="text-[#8D8D8D] text-[12px]">
                  By logging in&#44; you agree to Nike&apos;s{" "}
                  <u>Privacy Policy</u>
                </p>
                <p className="text-[#8D8D8D] text-[12px]">
                  and <u>Terms of Use</u>
                </p>
              </div>

              <button className="w-[320px] h-[40px] ronded-sm my-6 text-[#FFFFFF] bg-black">
                SIGN IN
              </button>
              <p className="text-[#8D8D8D] text-[12px] justify-center flex items-center w-[324px] h-[24px]">
                Not a Member{" "}
                <u className="ml-2 text-black">
                  <Link href={"/joinus"}>Join us?</Link>
                </u>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
