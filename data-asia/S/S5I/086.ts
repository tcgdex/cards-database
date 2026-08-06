import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "シバ",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。前の相手の番に、自分のポケモンがきぜつしていたなら、引く枚数は7枚になる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538633,
				tcgplayer: 569035,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
