import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ナツメ＆ハチク",
		'zh-tw': "叉字蝠V",
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。 追加で、このカードを使うときに、自分の手札を5枚トラッシュしてよい。その場合、それぞれちがうタイプのポケモンも3枚まで選び、手札に加えられる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525390,
				tcgplayer: 597341,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Promo",
};

export default card;
