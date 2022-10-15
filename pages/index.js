export default function Home(props) {
  console.log(props);
  return <div>Next JS &amp; WordPress course.</div>;
}

export const getStaticProps = async () => {
  return {
    props: {
      exampleprop: "test",
    },
  };
};
