import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャッジマン",
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、それぞれ山札を4枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908399,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "None",
};

export default card;
