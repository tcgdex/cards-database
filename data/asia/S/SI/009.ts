import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斗笠菇"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "頭錘"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "衝擊打擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「衝擊打擊」。"
		},

		damage: 150,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card