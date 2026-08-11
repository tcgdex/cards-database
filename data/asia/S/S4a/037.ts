import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 火紅不倒翁"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "由於居住在積雪深厚的地域，火囊也因受到冷卻而退化了。取而代之的是製造冷氣的器官。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰凍拳"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card