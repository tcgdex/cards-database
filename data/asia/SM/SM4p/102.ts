import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ファイヤーメモリ",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけている「シルヴァディGX」は、ポケモンになる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560135,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
