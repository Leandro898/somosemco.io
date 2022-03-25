import Head from "next/head";
import Navigation from "./NavBar";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Somos Emco</title>
      </Head>
      <Navigation/>
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
