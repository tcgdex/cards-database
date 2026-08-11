import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "扒手貓"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "為了要看見人們困擾的樣子而去偷盜他們的物品。和偷兒狐是競爭對手。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "豎爪"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "擊掌奇襲"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
