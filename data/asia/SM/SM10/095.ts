import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロナ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557453,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
