import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バブル水エネルギー",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		'ja-jp': "このカードは、ポケモンについているかぎり、[W]エネルギー1個ぶんとしてはたらく。このカードをつけている[W]ポケモンは、特殊状態にならず、受けている特殊状態は、すべて回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 876981,
			},
		},
	],

	regulationMark: "J",
	rarity: "Rare",
};

export default card;
