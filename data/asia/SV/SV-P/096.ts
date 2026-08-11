import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "グルーシャ",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		ja: "自分の手札が5枚になるように、山札を引く。自分の場のポケモンにエネルギーが1枚もついていないなら、7枚になるように引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723910,
				tcgplayer: 587854,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
