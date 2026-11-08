import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マツリカ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にある[妖]エネルギーを1枚、自分のポケモンにつける。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544531,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "Ultra Rare",
};

export default card;
