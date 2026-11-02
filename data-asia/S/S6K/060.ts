import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "霧の水晶",
		'zh-tw': "霧之水晶",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "自分の山札から[超]タイプのたねポケモンまたは[超]エネルギーを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇1張【超】屬性的【基礎】寶可夢卡或者【超】能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560848,
				tcgplayer: 569288,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
