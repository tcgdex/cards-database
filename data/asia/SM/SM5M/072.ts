import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ハンサム",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		ja: "自分の山札を下から3枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559885,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
