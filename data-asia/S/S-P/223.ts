import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "クララ",
		'zh-tw': "雙卵細胞球",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンを2枚までと、基本エネルギーを2枚まで選び、相手に見せて、手札に加える。（ポケモンまたは基本エネルギーのどちらかだけでもよい。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597406,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
