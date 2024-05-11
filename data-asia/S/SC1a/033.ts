import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 小火馬"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "小小的角裡蘊藏著治癒之力。如果只是一點小傷，牠只要用角輕擦傷口就能治癒。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "治癒波動"
		},

		effect: {
			'zh-tw': "選擇自己的1隻寶可夢，恢復「30」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "活蹦亂跳"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card