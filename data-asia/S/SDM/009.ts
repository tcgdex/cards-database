import { Card } from "../../../interfaces"
import Set from "../SDM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胖甜妮"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "能從人們身上的氣味裡嗅出他們的身心狀態。 在醫療領域的實際應用備受矚目。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "吸取之吻"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "魔法射擊"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card