import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "マーズ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。その後、相手の手札からオモテを見ないで、1枚トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560016,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
