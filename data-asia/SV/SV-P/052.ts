import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ハラバリー",
		'zh-tw': "比克提尼ex",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "ブヨンブヨンの 体を 伸び縮み させると お腹の へそダイナモが 大電力を 発生させる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "でんじは",
				'zh-tw': "狡兔三窟",
			},
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: {
				ja: "ふたこぶボルト",
				'zh-tw': "勝利火焰",
			},
			damage: "10+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについている[L]エネルギーを2枚までトラッシュし、その枚数×80ダメージ追加。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705378,
				tcgplayer: 587809,
			},
		},
	],

	evolveFrom: {
		ja: "ズピカ",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [939],
};

export default card;
