import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "バブル水エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[W]エネルギー1個ぶんとしてはたらく。このカードをつけている[W]ポケモンは、特殊状態にならず、受けている特殊状態は、すべて回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900139,
				tcgplayer: 709259,
			},
		},
	],

	regulationMark: "J",
	rarity: "Mega Hyper Rare",
};

export default card;
