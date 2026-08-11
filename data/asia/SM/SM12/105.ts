import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "グズマ&ハラ",
	},

	illustrator: "Junsei Kuninobu",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある「スタジアム」を1枚、相手に見せてから、手札に加える。そして山札を切る。追加で、このカードを使うときに、自分の手札を2枚トラッシュしてよい。その場合、「ポケモンのどうぐ」と「特殊エネルギー」も1枚ずつ手札に加えられる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555071,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
