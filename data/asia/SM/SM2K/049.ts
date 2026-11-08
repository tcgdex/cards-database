import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハラ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。自分がすでにGXワザを使っていたなら、引く枚数は7枚になる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561515,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
