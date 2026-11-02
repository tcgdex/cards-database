import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "グラビティーマウンテン",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいの場の2進化ポケモン全員の最大HPは、それぞれ「-30」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793605,
				tcgplayer: 587701,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Secret Rare",
};

export default card;
