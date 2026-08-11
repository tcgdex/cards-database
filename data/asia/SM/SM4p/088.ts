import { Card } from "models/database/card";
import Set from "../SM4p";

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
				cardmarket: 560121,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
