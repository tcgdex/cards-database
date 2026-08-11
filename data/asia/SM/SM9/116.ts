import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポケモン通信",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札からポケモンを1枚選び、相手に見せてから、山札にもどす。もどした場合、自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558491,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
