const SectionDescription = () => {
  return (
    <div className="w-11/12 max-w-[700px] text-lightYellow mx-auto">
      <h4 className="text-3xl font-bold leading-10 mt-32 mb-10">
        Firewatch is a mystery set in the Wyoming wilderness, where your only
        emotional lifeline is the person on the other end of a handheld radio.
      </h4>
      <div className="grid grid-cols-1 text-xl leading-8 md:grid-cols-2 gap-8">
        <p className="col-span-1 inline">
          The year is 1989.
          <br />
          <br />
          You are a man named Henry who has retreated from your messy life to
          work as a fire lookout in the Wyoming wilderness. Perched atop a
          mountain, it's your job to find smoke and keep the wilderness safe.
          <br />
          <br />
          An especially hot, dry summer has everyone on edge. Your supervisor, a
          woman named Delilah, is available to you
        </p>
        <p className="col-span-1 inline">
          at all times over a small, handheld radio—and is your only contact
          with the world you've left behind.
          <br />
          <br />
          But when something strange draws you out of your lookout tower and
          into the world below, you'll explore a wild and unknown environment,
          facing questions and making interpersonal choices that can build or
          destroy the only meaningful relationship you have.
        </p>
      </div>
    </div>
  );
};

export default SectionDescription;
