import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "モノマネむすめ",
		'zh-tw': "模仿少女",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、相手の手札の枚数ぶん、自分の山札を引く。",
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從自己的牌庫抽出與對手的手牌張數相同數量的卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571655,
				tcgplayer: 569388,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Common",
};

export default card;
