import { Card } from "../../../interfaces"
import Set from "../SVEL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "加熱洛托姆"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "如果烤箱微波爐本身運轉不良，鑽進裡面的洛托姆 也會變得無精打采。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "熱力衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到40點傷害。"
		},

		damage: 100,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card