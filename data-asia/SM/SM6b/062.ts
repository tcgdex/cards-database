import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "TVレポーター",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。その後、自分の手札を1枚トラッシュする。",
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
