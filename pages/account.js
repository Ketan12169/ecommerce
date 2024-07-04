import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { useSession, signIn, signOut } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import { useRouter } from "next/router";

const Background = styled.div`
  background-color: #f0f0f0; /* Replace with your desired background color */
  width: 100vw;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #ffffff; /* Replace with your desired button background color */
  padding: 8px 16px;
  border-radius: 8px;
`;

export default function Account() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  const handleSignIn = () => {
    signIn("google");
  };

  return (
    <>
      <Header />
      <Background>
        <Content>
          {status === "authenticated" ? (
            <>
              <h2>
                Hello, <b>{session?.user?.name}</b>
              </h2>
              <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
                <img src={session?.user?.image} alt="" className="w-6 h-6" />
                <br />
                <span className="px-2">{session?.user?.name}</span>
              </div>
              <br />
              <Button onClick={handleSignOut}>Sign Out</Button>
            </>
          ) : (
            <Button onClick={handleSignIn}>Login with Google</Button>
          )}
        </Content>
      </Background>
    </>
  );
}
