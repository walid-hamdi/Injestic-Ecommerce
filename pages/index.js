import HeadInfo from "../components/Head";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";

export default function Home({ products }) {
  return (
    <>
      <HeadInfo title="Injestic Products" />
      <Hero />
      <ProductList products={products} />
    </>
  );
}
export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
    revalidate: 1,
  };
}
