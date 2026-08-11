import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リーリエの決心",
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。自分のサイドの残り枚数が6枚なら、引く枚数は8枚になる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861418,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
