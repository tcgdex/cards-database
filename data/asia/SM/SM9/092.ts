import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アクアパッチ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュにある[水]エネルギーを1枚、ベンチの[水]ポケモンにつける。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558467,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "A",
	rarity: "Rare Holo",
};

export default card;
