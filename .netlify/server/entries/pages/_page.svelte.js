import { a1 as attr_class, a2 as attr, a3 as stringify, h as head } from "../../chunks/index.js";
import { I as Image } from "../../chunks/Image.js";
function Block($$renderer, $$props) {
  let { blockClass = "", id, children } = $$props;
  $$renderer.push(`<div${attr_class(`block ${stringify(blockClass)}`, "svelte-p7f9cd")}${attr("id", id)}>`);
  children?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
function EasterSunday($$renderer) {
  const blockClass = "easterSunday";
  const id = "EasterSunday";
  Block($$renderer, {
    blockClass,
    id,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="contentContainer"><p class="desc">Let’s be honest.A lot of people only go to church on Easter. And a lot of people stopped going
			altogether. If that’s you — you’re invited. No pressure.No perfect people.Just real
			conversations about real life. If you don’t already have plans, we would love for you</p> <div class="easterContainer svelte-sahhzq"><p class="easterText svelte-sahhzq">Easter</p></div> <div class="timeContainer svelte-sahhzq"><h1 class="desc svelte-sahhzq">Easter &amp; Me</h1> <p class="desc svelte-sahhzq">Sunday: April 5th, 9:00am &amp; 10:30am</p> <p class="desc svelte-sahhzq">Because the great news of Easter is too big to be contained in a single Sunday, we will be
				doing 3 weeks of Easter celebrations.</p> <p class="desc svelte-sahhzq">Please join us April 12th, 19th, and 26th for the remainder of the series. At 9:00 or 10:30.</p> <p class="desc svelte-sahhzq">7700 W. Woodard Drive</p></div></div>`);
    }
  });
}
function EasterEggHunt($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const blockClass = "eeh-block";
    const id = "EasterEggHunt";
    Block($$renderer2, {
      blockClass,
      id,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="contentContainer eehContainer svelte-13nn14i"><p class="hopOver svelte-13nn14i">Hop on over for our</p> <div class="joinUs svelte-13nn14i"><p class="join svelte-13nn14i">Join us on</p> <p class="date svelte-13nn14i">April 4th <br/> 10-noon</p></div> <div class="eeh svelte-13nn14i"><p class="easter svelte-13nn14i">Easter<br/>Egg Hunt</p></div> <div class="eehDesc svelte-13nn14i"><p class="join svelte-13nn14i">For some egg-citing fun! Obstacle course, food, games, maze &amp; more!!</p> <p class="allAges svelte-13nn14i">Event for all ages!</p></div></div>`);
      }
    });
  });
}
function GoodFriday($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const blockClass = "GoodFriday";
    const id = "GoodFriday";
    Block($$renderer2, {
      blockClass,
      id,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="GFcontainer svelte-3wf3by" id="GFContainer"><div class="textContainer"><p class="desc gfDesc">Join us for self guided experience.</p></div> <div class="headlineContainer svelte-3wf3by"><h1 class="gfTitle svelte-3wf3by">Good Friday</h1></div> <div class="descContainer"><p class="desc">At Westwoods Community Church - 7700 W. Woodard Dr.</p> <p class="desc">Friday: April 3rd</p> <p class="desc">Doors will be open from 12-7pm</p></div></div>`);
      }
    });
  });
}
function Directions($$renderer) {
  const blockClass = "directions";
  const id = "Directions";
  Block($$renderer, {
    blockClass,
    id,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="directionContainer svelte-yvavre"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8329214253686!2d-105.08480848435234!3d39.675972808278864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81ad73d8223d%3A0xef2d6fab8083844!2sWestwoods%20Community%20Church!5e0!3m2!1sen!2sus!4v1569100714699!5m2!1sen!2sus" frameborder="0" allowfullscreen="" title="Westwoods Map" id="wwMap" class="svelte-yvavre"></iframe> <div class="directionText svelte-yvavre"><p class="churchName svelte-yvavre">Westwoods Community Church</p> <p class="svelte-yvavre">7700 W. Woodard Dr.</p> <p class="svelte-yvavre">Lakewood, CO 80227</p> <p class="svelte-yvavre"><a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer" class="svelte-yvavre">www.westwoodscc.org</a></p></div></div> <div class="logoContainer svelte-yvavre"><a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer">`);
      Image($$renderer2, {
        source: "wwccLogo",
        altTag: "Westwoods Community Church Logo"
      });
      $$renderer2.push(`<!----></a></div>`);
    }
  });
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Easter In Lakewood | Westwoods Community Church</title>`);
    });
  });
  EasterSunday($$renderer);
  $$renderer.push(`<!----> `);
  EasterEggHunt($$renderer);
  $$renderer.push(`<!----> `);
  GoodFriday($$renderer);
  $$renderer.push(`<!----> `);
  Directions($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
