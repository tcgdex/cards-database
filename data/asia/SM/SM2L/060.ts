import { Card } from "models/database/card";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アクアパッチ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュにある[水]エネルギーを1枚、ベンチの[水]ポケモンにつける。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561464,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
