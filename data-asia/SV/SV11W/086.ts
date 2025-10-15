import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "イグニッションエネルギー",
	},

	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "ポケモンについているこのカードは、自分の番の終わりにトラッシュする。 このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。 進化ポケモンについているなら、エネルギー3個ぶんとしてはたらく。",
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
