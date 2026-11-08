import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フウとラン",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、2つの効果から1つを選んで使う。◆自分の手札をすべて山札にもどして切る。その後、山札を5枚引く。◆自分のバトルポケモンをベンチポケモンと入れ替える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559052,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
