import lume from "lume/mod.ts";
import blog from "blog/mod.ts";
import highlight from "lume/plugins/code_highlight.ts";

const site = lume({
  location: new URL("https://magoninho.github.io/blog"),
  dest: "../blog"
});

site.use(blog());
site.use(highlight({
  theme: {
    name: "atom-one-light", // The theme name to download
    cssFile: "/styles.css", // The destination filename
    placeholder: "atom-one-light", // Optional placeholder to replace with the final code
  },
}));

export default site;
