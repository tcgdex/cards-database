import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "伝説の海溝",
	},

	illustrator: "danciao",
	category: "Trainer",

	effect: {
		ja: "おたがいのポケモン全員は、HPを回復するとき、回復するHPが2倍になる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 900083,
				tcgplayer: 709225,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
