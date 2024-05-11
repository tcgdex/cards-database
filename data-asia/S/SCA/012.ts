import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風速狗"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "只需要一晝夜時間就能跑完１００００公里的身影令許多人為之沉醉。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "熱身"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有「燃燒圍巾」，則這隻寶可夢的最大HP增加「100」。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "火之鬃"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card