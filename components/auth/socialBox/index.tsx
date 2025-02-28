import Image from "next/image";
import { useState } from "react";
import { signIn } from "./actions";

interface ISocialBoxProps {}
export default function SocialBox(props: ISocialBoxProps) {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const handleSignIn = async (provider: string) => {
    const formData = new FormData();
    formData.set("provider", provider);

    const response = await signIn(formData);
    setRedirectUrl(response.url);
  };

  if (redirectUrl) {
    window.location.href = redirectUrl;
  }

  return (
    <div className="mt-14 flex flex-col gap-10 justify-center">
      <div className="flex items-center justify-center gap-x-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="181"
          height="2"
          viewBox="0 0 181 2"
          fill="none"
        >
          <path d="M0.5 1H180.5" stroke="#E0E0E0" />
        </svg>
        <span className="text-[#ABB8CE] text-xl">SNS 계정으로 로그인 하기</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="181"
          height="2"
          viewBox="0 0 181 2"
          fill="none"
        >
          <path d="M0.5 1H180.5" stroke="#E0E0E0" />
        </svg>
      </div>
      <div className="flex justify-center gap-x-4">
        <button onClick={() => handleSignIn("google")} className="oauth">
          <Image src="/icons/google.svg" alt="google" height={27} width={27} />
        </button>
        <button onClick={() => handleSignIn("kakao")} className="oauth">
          <Image src="/icons/kakao.svg" alt="kakao" height={30} width={27} />
        </button>
        <button onClick={() => handleSignIn("naver")} className="oauth">
          <Image src="/icons/naver.svg" alt="naver" height={30} width={27} />
        </button>
      </div>
    </div>
  );
}
