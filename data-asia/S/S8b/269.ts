import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ポプラ",
	},

	illustrator: "Taira Akitsu",
	category: "Trainer",

	effect: {
		ja: "コインを2回投げ、オモテの数ぶんまで、自分の山札から好きなカードを選び、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587067,
				tcgplayer: 571520,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Ultra Rare",
};

export default card;
