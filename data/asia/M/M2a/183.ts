import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グラビティーマウンテン",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいの場の2進化ポケモン全員の最大HPは、それぞれ「-30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861426,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "None",
};

export default card;
