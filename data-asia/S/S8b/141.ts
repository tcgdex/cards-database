import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "レベルボール",
		'zh-tw': "等級球",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、HPが「90」以下のポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇1張HP為「90」以下的寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586657,
				tcgplayer: 571394,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578422,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "None",
};

export default card;
