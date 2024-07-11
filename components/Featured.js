import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import Image from "next/image";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;
const Note = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: white;
  padding: 10px;
`;
const Span = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  const [showNote, setShowNote] = useState(true);
  useEffect(() => {
    const noteHidden = localStorage.getItem("noteHidden");
    if (noteHidden === "true") {
      setShowNote(false);
    }
  }, []);

  const handleClose = () => {
    setShowNote(false);
    localStorage.setItem("noteHidden", "true");
  };
  return (
    <>
      {showNote && (
        <Note>
          {" "}
          Please note that while you can place orders, they will not be
          delivered as this is a demonstration website, not a real e-commerce
          platform. <Span onClick={handleClose}>X</Span>
        </Note>
      )}

      <Bg>
        <Center>
          <ColumnsWrapper>
            <Column>
              <div>
                <Title>{product?.title}</Title>
                <Desc>{product?.description}</Desc>
                <ButtonsWrapper>
                  <ButtonLink
                    href={"/product/" + product?._id}
                    outline={1}
                    white={1}
                  >
                    Read more
                  </ButtonLink>
                  <Button white onClick={addFeaturedToCart}>
                    <CartIcon />
                    Add to cart
                  </Button>
                </ButtonsWrapper>
              </div>
            </Column>
            <Column>
              <Image src={product.images[0]} alt="" width="220" height="250" />
            </Column>
          </ColumnsWrapper>
        </Center>
      </Bg>
    </>
  );
}
