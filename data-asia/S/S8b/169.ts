import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ターフスタジアム",
		'zh-tw': "草路競技場",
	},

	illustrator: "aky CG Works",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札から[草]タイプの進化ポケモンを1枚選び、相手に見せて、手札に加えてよい。そして山札を切る。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可從自己的牌庫選擇1張【草】屬性的進化寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586685,
				tcgplayer: 571421,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578447,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "D",
	rarity: "None",
};

export default card;
