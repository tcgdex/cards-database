import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エキサイトスタジアム",
	},

	illustrator: "imoniii",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの場のたねポケモン全員の最大HPは、それぞれ「＋30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 838365,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
