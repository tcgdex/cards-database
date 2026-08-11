import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラルの仲間たち",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587056,
				tcgplayer: 571510,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
