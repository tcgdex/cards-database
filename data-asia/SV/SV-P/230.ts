import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "サイレントラボ",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "おたがいの場・手札・トラッシュにあるたねポケモンの特性は、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 804760,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Promo",
};

export default card;
