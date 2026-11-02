import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "シトロンの機転",
	},

	illustrator: "Shinya Mizuno",
	category: "Trainer",

	effect: {
		ja: "自分の[L]ポケモン全員のHPを、それぞれ「60」回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793599,
				tcgplayer: 587712,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Special illustration rare",
};

export default card;
