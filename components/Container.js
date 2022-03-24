import Head from "next/head";
import navigation from "./navigation";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Somos Emco</title>
      </Head>
      <navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
