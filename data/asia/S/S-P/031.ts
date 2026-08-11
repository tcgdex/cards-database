import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ともだちてちょう",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからサポートを2枚選び、相手に見せてから、山札にもどす。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597251,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
