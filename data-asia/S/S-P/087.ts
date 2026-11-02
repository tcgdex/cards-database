import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "グズマ&ハラ",
		'zh-tw': "噴火龍VMAX",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある「スタジアム」を1枚、相手に見せてから、手札に加える。そして山札を切る。追加で、このカードを使うときに、自分の手札を2枚トラッシュしてよい。その場合、「ポケモンのどうぐ」と「特殊エネルギー」も1枚ずつ手札に加えられる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463209,
				tcgplayer: 597297,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Promo",
};

export default card;
