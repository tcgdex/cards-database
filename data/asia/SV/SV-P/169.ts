import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "博士の研究",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべてトラッシュし、山札を7枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 778397,
				tcgplayer: 587912,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
