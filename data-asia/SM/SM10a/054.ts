import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "フウとラン",
	},

	illustrator: "You Iribi",
	category: "Trainer",

	effect: {
		ja: "このカードは、2つの効果から1つを選んで使う。◆自分の手札をすべて山札にもどして切る。その後、山札を5枚引く。◆自分のバトルポケモンをベンチポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557333,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
