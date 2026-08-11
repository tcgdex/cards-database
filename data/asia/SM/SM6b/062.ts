import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "TVレポーター",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。その後、自分の手札を1枚トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559212,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Common",
};

export default card;
