
const getMsg = async () => {
  try {
    const res = await fetch(process.env.SITE_URL + "/api/tweet", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch msgs");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading msgs: ", error);
  }
};

export default async function TweetList() {
  const { tweet } = await getMsg();

  return (
    <div className="">
    <div className="">
      <h2 className="font-semibold text-lg">Tweets</h2>
      {tweet.map((t) => (
        <div
          key={t._id}
          className="p-4 my-3  flex justify-between gap-5 items-start rounded-md shadow-md mb-5"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            {/* <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
