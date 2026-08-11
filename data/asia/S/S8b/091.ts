import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダクマ",
		'zh-tw': "熊徒弟",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "頭の 白く 長い 体毛を 引っぱると 気合が 高まり 丹田から パワーが 湧きあがる。",
		'zh-tw': "拉緊頭上又白又長的體毛就會變得氣勢高昂，並且由丹田湧出力量。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "たんれん",
				'zh-tw': "鍛鍊",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札から基本エネルギーを1枚選び、このポケモンにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張基本能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				'ja-jp': "ひじうち",
				'zh-tw': "肘擊",
			},
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586607,
				tcgplayer: 571344,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578399,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [891],
};

export default card;
