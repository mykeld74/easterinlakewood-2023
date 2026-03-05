import { h as head } from "../../chunks/index.js";
import { I as Image } from "../../chunks/Image.js";
function _layout($$renderer, $$props) {
  let { children } = $$props;
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&amp;family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;family=Federo&amp;display=swap" rel="stylesheet"/>`);
  });
  $$renderer.push(`<nav class="svelte-12qhfyh"><ul class="svelte-12qhfyh"><li class="svelte-12qhfyh"><a href="#EasterSunday" class="svelte-12qhfyh">Easter Sunday</a></li> <li class="svelte-12qhfyh"><a href="#EasterEggHunt" class="svelte-12qhfyh">Easter Egg Hunt</a></li> <li class="svelte-12qhfyh"><a href="#GoodFriday" class="svelte-12qhfyh">Good Friday</a></li> <li class="svelte-12qhfyh"><a href="#Directions" class="svelte-12qhfyh">Directions</a></li></ul></nav> `);
  children?.($$renderer);
  $$renderer.push(`<!----> <footer class="svelte-12qhfyh"><div class="imgContainer svelte-12qhfyh"><a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer">`);
  Image($$renderer, {
    source: "wwccLogo",
    altTag: "Westwoods Community Church Logo"
  });
  $$renderer.push(`<!----></a></div></footer>`);
}
export {
  _layout as default
};
