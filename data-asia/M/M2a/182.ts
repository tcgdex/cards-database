import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "活力の森",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいの[G]ポケモン全員は、出したばかりの番（最初の自分の番をのぞく）でも[G]ポケモンに進化できる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861425,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "None",
};

export default card;
