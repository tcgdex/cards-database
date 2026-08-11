import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "サイトウ",
		'zh-tw': "洗翠 勇士雄鷹",
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から5枚トラッシュし、その中にあるエネルギーをすべて、ベンチの[闘]ポケモンに好きなようにつける。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597412,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
