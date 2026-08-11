import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ともだちてちょう",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュからサポートを2枚選び、相手に見せてから、山札にもどす。そして山札を切る。",
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
