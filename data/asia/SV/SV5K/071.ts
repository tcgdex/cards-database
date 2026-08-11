import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネオアッパーエネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[C]エネルギー1個ぶんとしてはたらく。2進化ポケモンについているなら、すべてのタイプのエネルギー2個ぶんとしてはたらく。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752852,
				tcgplayer: 568405,
			},
		},
	],

	regulationMark: "H",
	rarity: "ACE SPEC Rare",
};

export default card;
