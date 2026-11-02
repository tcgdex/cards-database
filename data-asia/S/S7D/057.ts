import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "しんかのおこう",
		'zh-tw': "進化薰香",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分の山札から進化ポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇1張進化寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571646,
				tcgplayer: 569380,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "D",
	rarity: "Uncommon",
};

export default card;
