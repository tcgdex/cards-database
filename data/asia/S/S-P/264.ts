import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "キバナ",
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。自分のトラッシュから基本エネルギーを1枚選び、自分のポケモンにつける。その後、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605839,
				tcgplayer: 597437,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
