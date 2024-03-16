import { Helmet } from "react-helmet";

type MetaProps = {
  title: string;
  description: string;
  title2: string;
  url: string;
};

const Meta = ({ title, description, title2, url }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="keywords"
        content="Gabriel Minamedez, Developer, Writer, Computer Science, Philippines"
      />
      <meta
        name="description"
        content={
          "Gabriel Minamedez. Gab is a senior Computer Science student in De La Salle University in the Philippines. He is a fullstack web and iOS developer. " +
          description +
          " © " +
          new Date().getFullYear().toString() +
          " Gabriel Minamedez."
        }
      />

      <meta property="og:locale" content="en-US" />
      <meta property="og:site_name" content="Gabriel Minamedez" />
      <meta property="og:title" content={title2} />
      <meta property="og:url" content={url} />

      <link rel="canonical" href={url} />

      <script src="//www.google-analytics.com/analytics.js" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Gabriel Nicolas Minamedez",
            url: "https://gabminamedez.github.io/",
            sameAs: null,
          }),
        }}
      />
    </Helmet>
  );
};

export default Meta;
