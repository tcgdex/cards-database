import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャッジマン",
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、それぞれ、手札をすべて山札にもどし、山札を切る。その後、それぞれの山札を4枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864013,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "None",
};

export default card;
