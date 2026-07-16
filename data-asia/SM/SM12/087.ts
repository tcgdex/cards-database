import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "グズマ&ハラ",
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
				cardmarket: 555009,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
