import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { useRouter } from "next/router";
import styled from "styled-components";

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 20px;
  flex-wrap: wrap;
`;
const Img = styled.img`
  object-fit: contain;
`;

export default function Categories({ categories }) {
  const router = useRouter();

  function openCategoryProducts(id) {
    const url = "/category/" + id;
    router.push(url);
  }

  return (
    <>
      <Header />
      <Center flex>
        <h1 className="">Categories</h1>
        <Div>
          {categories.map((category) => (
            <CategoryBox
              key={category._id}
              onClick={() => openCategoryProducts(category._id)}
            >
              <Img
                src={category.categoryImages[0]}
                alt="Image"
                width="250"
                height="200"
              ></Img>
              <h2 key={category._id}>{category.name}</h2>
            </CategoryBox>
          ))}
        </Div>
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  const categories = await Category.find();

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
