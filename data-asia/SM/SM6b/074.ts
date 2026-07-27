import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "TVレポーター",
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。その後、自分の手札を1枚トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559224,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
