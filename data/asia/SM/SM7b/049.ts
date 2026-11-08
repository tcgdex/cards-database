import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マツリカ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にある[妖]エネルギーを1枚、自分のポケモンにつける。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558874,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
