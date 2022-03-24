import Head from "next/head";
import Navigation from "./Navigation";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Somos Emco</title>
      </Head>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
