import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "チェレン",
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
	thirdParty: {
		cardmarket: 829087,
		tcgplayer: 636637,
	},
};

export default card;
