import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  gap: 20px;
  @media screen and (max-width: 613px) {
    justify-content: center;
  }
`;

export default function ProductsGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </StyledProductsGrid>
  );
}
