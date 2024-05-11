import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "護城龍"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		'zh-tw': "大約１億年前的寶可夢。 結實到極點的臉擁有 超越鋼鐵的硬度。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "原始要塞"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的「寶可夢【V】」招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "鐵之衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 180,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card