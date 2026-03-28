import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "プリズムエネルギー",
	},

	illustrator: "",
	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。 たねポケモンについているなら、すべてのタイプのエネルギー1個ぶんとしてはたらく。",
	},

	variants: [{"type": "normal"}],

	energyType: "Special",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
