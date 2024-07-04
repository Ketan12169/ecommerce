import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;

export default function NewProducts({ products }) {
  console.log();

  const newarrivalsproducts = products.slice(0, 4);
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={newarrivalsproducts} />
    </Center>
  );
}
