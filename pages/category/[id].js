import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import ProductsGrid from "@/components/ProductsGrid";
import Categories from "../categories";
import { Category } from "@/models/Category";

export default function ProductPage({ products, category }) {
  return (
    <>
      <Header />
      <Center>
        <h1>Products for {category[0].name}</h1>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();

  const { id } = context.query;

  const products = await Product.find({ category: id });
  const category = await Category.find({ _id: id });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      category: JSON.parse(JSON.stringify(category)),
    },
  };
}
