import Head from "next/head";

export const Seo = ({
  title = "GenieMate: Your AI Study Assistant",
  description = "GenieMate helps students study their notes using AI.",
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
}) => {
  //TODO: Add domain and defaultImage
  const siteName = "GenieMate";
  return (
    <Head>
      <title>{`${title} | ${siteName} ✨`}</title>
      <meta name="description" content={description} key="desc" />

      <meta property="og:title" content={`${title} | ${siteName} ✨`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={domain} /> 
		<meta property="og:image" content={defaultImage} /> */}
      <meta property="og:image:alt" content={siteName} />
      <meta property="og:site_name" content={siteName} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={`${title} | ${siteName} ✨`} />
      <meta property="twitter:description" content={description} />
      {/* <meta property="twitter:image" content={defaultImage} /> */}
    </Head>
  );
};
