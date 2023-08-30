import {
  Subs,
  Quality,
  Services,
  Popular,
  Offers,
  Hero,
  Reviews,
  Footer,
} from "../components/index";

const Home = () => {
  return (
    <main className="reltive">
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Popular />
      </section>
      <section className="padding">
        <Quality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <Offers />
      </section>
      <section className="padding bg-pale-blue">
        <Reviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full ">
        <Subs />
      </section>
      <section className="padding-x padding-t pb-8 bg-black text-white ">
        <Footer />
      </section>
    </main>
  );
};
export default Home;
