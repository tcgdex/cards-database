import { Card } from "models/database/card";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マーマネ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札を4枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559877,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
