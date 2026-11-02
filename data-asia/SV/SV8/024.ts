import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "パルデア ケンタロス",
		'zh-tw': "帕底亞 肯泰羅",
		'zh-cn': "帕底亞 肯泰羅",
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "ツノから 水を 吹きだし 泳ぐ。 脂肪分が 多く 浮きやすいのが ウォーター種の 特徴。",
		'zh-tw': "會從角噴出水來游泳。 脂肪含量高而容易浮在水上 是水瀾種的特徵。",
		'zh-cn': "會從角噴出水來游泳。 脂肪含量高而容易浮在水上 是水瀾種的特徵。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かちあげホーン",
				'zh-tw': "上搗角擊",
				'zh-cn': "上搗角擊",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、相手のバトル場の2進化ポケモンについているエネルギーを2個選び、相手の手札にもどす。",
				'zh-tw': "若希望，選擇2個對手的戰鬥場的【2階進化】寶可夢身上附加的能量，放回對手的手牌。",
				'zh-cn': "若希望，選擇2個對手的戰鬥場的【2階進化】寶可夢身上附加的能量，放回對手的手牌。",
			},
		},
		{
			name: {
				ja: "ジェットヘッド",
				'zh-tw': "噴射頭擊",
				'zh-cn': "噴射頭擊",
			},
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793458,
				tcgplayer: 587604,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [128],
};

export default card;
