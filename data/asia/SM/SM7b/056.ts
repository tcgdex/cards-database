import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マツリカ",
	},

	illustrator: "You Iribi",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にある[妖]エネルギーを1枚、自分のポケモンにつける。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558881,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
