import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "スイクン",
		'zh-tw': "烈焰猴V",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "一瞬で 汚く 濁った 水も 清める 力を 持つ。 北風の 生まれ変わり という。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "スプラッシュ",
				'zh-tw': "流星拳",
			},
			damage: 20,
			cost: ["Water"],
		},
		{
			name: {
				ja: "オーロラループ",
				'zh-tw': "紅蓮火焰",
			},
			damage: 130,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーを2個選び、手札にもどす。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525430,
				tcgplayer: 597349,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [245],
};

export default card;
