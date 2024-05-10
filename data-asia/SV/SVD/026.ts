import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "保母曼波"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "會用魚鰭溫柔地抱住受傷或是虛弱的寶可夢， 並用特殊的黏膜加以治療。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝浪"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "水流斬"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card