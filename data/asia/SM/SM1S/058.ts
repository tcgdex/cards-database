import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イリマ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、おたがいのプレイヤーは、それぞれコインを1回投げ、オモテなら6枚、ウラなら3枚、山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561735,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
