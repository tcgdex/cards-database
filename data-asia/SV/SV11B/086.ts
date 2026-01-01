import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "プリズムエネルギー",
	},

	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。 たねポケモンについているなら、すべてのタイプのエネルギー1個ぶんとしてはたらく。",
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
