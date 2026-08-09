import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "エキサイトスタジアム",
	},

	illustrator: "imoniii",
	category: "Trainer",

	effect: {
		ja: "おたがいの場のたねポケモン全員の最大HPは、それぞれ「＋30」される。",
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
