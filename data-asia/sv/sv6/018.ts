import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒヒダルマ",
		'zh-tw': "達摩狒狒"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "OKUBO",
	dexId: [555],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "血気 盛んな ポケモン。 太い 腕から 繰りだす パンチは ダンプカーも 粉々に するぞ。",
		'zh-tw': "總是熱血沸騰的寶可夢。 牠厚重的手臂使出的拳擊 甚至能把砂石車打得粉碎。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "ころがりタックル",
			'zh-tw': "滾動衝撞"
		},

		damage: 60
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "もうかのとっしん",
			'zh-tw': "猛火猛撞"
		},

		damage: 210,

		effect: {
			ja: "このポケモンにも70ダメージ。",
			'zh-tw': "這隻寶可夢也受到70點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card