import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勾帕路翁"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鐵頭碰"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "金屬斬"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 130,
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

	retreat: 2,
	regulationMark: "E"
}

export default card