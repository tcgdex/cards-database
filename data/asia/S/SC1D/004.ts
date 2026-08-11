import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪笠怪"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "生活在積雪深厚的山上。會透過把腳踩進積雪中來吸收水分和冷氣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "敲擊"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "飛葉快刀"
		},

		damage: 50,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
