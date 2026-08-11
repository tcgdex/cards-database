import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰寶"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "棲息在極其寒冷的地域。會把自己的腳凍在冰岩怪的背上固定起來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card