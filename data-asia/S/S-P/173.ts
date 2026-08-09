import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "コオリッポ",
		'zh-tw': "雷吉奇卡斯",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "暑さに 弱い 顔を いつも 氷で 冷やしている。 頭の 毛を 海に たらして 餌を釣る。",
		'zh-tw': "在世上流傳著的傳說中，牠拉動了被繩子所綑綁的大地。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "アイスボーナス",
				'zh-tw': "暖身",
			},
			cost: ["Water"],
			effect: {
				ja: "自分の手札から[水]エネルギーを1枚選び、トラッシュする。その後、自分の山札を3枚引く。",
				'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				ja: "とびだしヘッド",
				'zh-tw': "雙重衝擊",
			},
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561782,
				tcgplayer: 597371,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [875],
};

export default card;
