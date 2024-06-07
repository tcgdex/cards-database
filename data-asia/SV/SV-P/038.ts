import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴火龍VMAX"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "利爪劈擊"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "超極巨地獄滅焰"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 300,
		cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card