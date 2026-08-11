import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "からくちスパイシーカレー",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをやけどにする。自分のバトルポケモンのHPを「40」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 606609,
				tcgplayer: 597422,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
