import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サイレントラボ",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの場・手札・トラッシュにあるたねポケモンの特性は、すべてなくなる。",
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
