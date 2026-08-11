import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 火紅不倒翁"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "由於居住在積雪深厚的地域，火囊也因受到冷卻而退化了。取而代之的是製造冷氣的器官。"
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
			'zh-tw': "頭錘"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
