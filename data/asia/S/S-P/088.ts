import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シロナ&カトレア",
		'zh-tw': "丹帝",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュにあるサポート（「シロナ&カトレア」とこのカードの効果でトラッシュされたカードをのぞく）を1枚、相手に見せてから、手札に加える。追加で、このカードを使うときに、自分の手札を1枚トラッシュしてよい。その場合、自分の山札を3枚引く。",
		'zh-tw': "在這個回合，自己的寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463214,
				tcgplayer: 597298,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Promo",
};

export default card;
