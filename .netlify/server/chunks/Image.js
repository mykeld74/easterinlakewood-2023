import { a2 as attr, a1 as attr_class, a4 as clsx, a0 as derived } from "./index.js";
function Image($$renderer, $$props) {
  let { source, altTag } = $$props;
  const src = derived(() => `https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/easterinlakewood/${source}`);
  $$renderer.push(`<img${attr("src", src())}${attr("alt", altTag)}${attr_class(clsx(source))} loading="lazy"/>`);
}
export {
  Image as I
};
