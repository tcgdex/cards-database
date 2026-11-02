import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒガナの信頼",
	},

	illustrator: "Teeziro",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。その後、ベンチに入れ替えたポケモンについているエネルギーを1個選び、新しいバトルポケモンにつけ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900145,
				tcgplayer: 709266,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
};

export default card;
