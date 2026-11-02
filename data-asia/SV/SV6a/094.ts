import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "力の砂時計",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分の番の終わりに、このカードをつけているポケモンがバトル場にいるなら、自分のトラッシュから基本エネルギーを1枚選び、そのポケモンにつけてよい。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773843,
				tcgplayer: 566345,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
};

export default card;
