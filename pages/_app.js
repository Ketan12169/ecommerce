import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "@/components/CartContext";
import { SessionProvider } from "next-auth/react";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <SessionProvider session={pageProps.session}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}
