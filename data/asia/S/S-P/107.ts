import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコ",
		'zh-tw': "伊布",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "いつも お腹を すかせている。 ポケットの ような 袋に 入れた タネを 食べて 電気を つくる。",
		'zh-tw': "由於不穩定的基因，蘊含著各式各樣進化可能性的特殊寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ペコペコ",
				'zh-tw': "準備",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
				'zh-tw': "從自己的手牌選擇1張基本能量卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				ja: "でんきショック",
				'zh-tw': "咬住",
			},
			damage: 40,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525210,
				tcgplayer: 597308,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [877],
};

export default card;
