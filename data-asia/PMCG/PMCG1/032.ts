import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "爆風",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [9],
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "レインダンス",
			},
			effect: {
				ja: "ターン中に好きなように、手から基本的な水エネルギーカードを1匹の水ポクモンに添付することができます。このポクモンが眠っている、混乱し、麻痺している場合、このポクモンの力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: {
				ja: "ハイドロポンプ",
			},
			effect: {
				ja: "この攻撃は、このポケモンに付随する追加の水エネルギーごとに10個のダメージを与えます（この攻撃のコストに加えて）。この方法で20以上のダメージを追加することはできません。",
			},

		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};
