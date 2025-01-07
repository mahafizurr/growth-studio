import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

// Create an emotion cache
const emotionCache = createCache({ key: "css", prepend: true });
const { extractCritical } = createEmotionServer(emotionCache);

export default function Document({ emotionStyleTags }) {
  return (
    <Html lang="en">
      <Head>{emotionStyleTags}</Head>
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  const styles = extractCritical(initialProps.html);
  return {
    ...initialProps,
    emotionStyleTags: (
      <style
        data-emotion={`${styles.ids.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />
    ),
  };
};
