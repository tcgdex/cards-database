import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "カトレア",
		'zh-tw': "嘉德麗雅",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "自分の手札を好きなだけ選び、好きな順番に入れ替えて、山札の下にもどす。その後、もどした枚数ぶん、自分の山札を引く。",
		'zh-tw': "選擇任意數量的自己的手牌，以任意順序排列，放回牌庫下方。然後，從牌庫抽出與放回的張數相同數量的卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560852,
				tcgplayer: 569292,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
