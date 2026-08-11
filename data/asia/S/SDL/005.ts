import { Card } from "../../../interfaces"
import Set from "../SDL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風速狗"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "從古時候起就是擄獲眾多人心的美麗寶可夢。 能像飛一樣輕盈地奔跑。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火之爪"
		},

		damage: 40,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "熱力衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 160,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card