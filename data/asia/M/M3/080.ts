import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ロック闘エネルギー",
	},

	illustrator: "",

	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。このカードをつけているポケモンは、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果は、なくならない。）",
	},

	variants: [{"type": "holo"}],

	regulationMark: "I",
	rarity: "Rare",

	thirdParty: {
		cardmarket: 868090,
		tcgplayer: 674399,
	},
};

export default card;