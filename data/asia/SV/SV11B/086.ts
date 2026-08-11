import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プリズムエネルギー",
	},

	illustrator: "",

	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。 たねポケモンについているなら、すべてのタイプのエネルギー1個ぶんとしてはたらく。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }],

	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 828660,
		tcgplayer: 636440,
	},
};

export default card;
