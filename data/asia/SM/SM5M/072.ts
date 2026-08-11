import { Card } from "models/database/card";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハンサム",
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を下から3枚引く。",
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
