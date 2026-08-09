import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
		'zh-tw': "伊布",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "不安定な 遺伝子の おかげで さまざまな 進化の 可能性を 秘めている 特殊な ポケモン。",
		'zh-tw': "由於不穩定的基因，蘊含著各式各樣進化可能性的特殊寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ブイサーチ",
				'zh-tw': "布搜索",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「ポケモンV」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張「寶可夢【V】」卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ふむ",
				'zh-tw': "踩",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586641,
				tcgplayer: 571378,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578409,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [133],
};

export default card;
