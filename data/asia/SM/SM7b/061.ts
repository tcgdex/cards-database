import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネットボール",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にある[草]タイプのたねポケモンまたは[草]エネルギーを1枚、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558886,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
