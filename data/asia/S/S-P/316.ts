import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "やすらぎの公園",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいのポケモン全員は、こんらんにならず、受けているこんらんは、すべて回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 678824,
				tcgplayer: 597489,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "Promo",
};

export default card;
