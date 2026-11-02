import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シマボシ",
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		ja: "コインを2回投げ、オモテの数ぶんまで、自分のトラッシュから好きなカードを選び、相手に見せて、好きな順番に入れ替えて、山札の上にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 666790,
				tcgplayer: 597474,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Promo",
};

export default card;
