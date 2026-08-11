import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "危険な密林",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいのどくのポケモン（[D]ポケモンをのぞく）全員は、どくでのせるダメカンの数がそれぞれ2個多くなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752851,
				tcgplayer: 568404,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
