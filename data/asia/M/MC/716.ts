import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タロ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。相手のサイドの残り枚数が3枚以下なら、引く枚数は8枚になる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864018,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
