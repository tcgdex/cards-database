import { Card } from "models/database/card";
import Set from "../SM2L";

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
			type: "normal",
			thirdParty: {
				cardmarket: 561451,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
