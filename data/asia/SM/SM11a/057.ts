import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャッジマン",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、手札をすべて山札にもどし、山札を切る。その後、それぞれの山札を4枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556729,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "Uncommon",
};

export default card;
