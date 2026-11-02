import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブロロロームex",
		'zh-tw': "普隆隆姆ex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "アクセルフラッシュ",
				'zh-tw': "暴衝閃光",
			},
			damage: "20+",
			cost: ["Metal"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、120ダメージ追加。",
				'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則增加120點傷害。",
			},
		},
		{
			name: {
				ja: "スピードブレイク",
				'zh-tw': "高速破壞",
			},
			damage: 250,
			cost: ["Metal", "Metal", "Metal"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、トラッシュする。",
				'zh-tw': "將這隻寶可夢與附加的卡全部丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773764,
				tcgplayer: 566266,
			},
		},
	],

	evolveFrom: {
		ja: "ブロロン",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [966],

	suffix: "EX",
};

export default card;
