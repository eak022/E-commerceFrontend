const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#bdbdbd] to-100%">
      <div className="py-48 flex flex-col  justify-center items-center">
        <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-sung">
          Unleash Your Inner Geek: Shop Our Exclusive Tech-themed Merchandise!
        </h2>
        <p>
          We offer a curated selection of high-quality products ranging from
          clothing and accessories to home decor and office essentials. Each
          item is carefully chosen to meet our standards of quality,
          functionality, and style.
        </p>

        <a
          className="btn bg-red px-8 py-3 font-semibold text-white rounded-full"
          href="/shop"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
