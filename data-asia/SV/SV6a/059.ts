import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "アクロマの執念",
		'zh-tw': "阿克羅瑪的執著",
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		ja: "自分の山札からスタジアムとエネルギーを1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇競技場卡與能量卡各1張，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773808,
				tcgplayer: 566310,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
