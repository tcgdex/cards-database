import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・レヒレ",
		'zh-tw': "卡璞・鰭鰭",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "守り神と 呼ばれるが 無闇に 近付く 相手には 恐ろしい 災いを もたらすこともある。",
		'zh-tw': "被稱為守護神，但有時會對隨便靠近自己的對手帶來恐怖的災難。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "スマッシュターン",
				'zh-tw': "粉碎迴轉",
			},
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: {
				ja: "オーシャンループ",
				'zh-tw': "大洋閉環",
			},
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、手札にもどす。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，放回手牌。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560765,
				tcgplayer: 569244,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [788],
};

export default card;
