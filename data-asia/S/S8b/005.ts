import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "櫻花寶"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "身體越紅的櫻花寶含有的營養越豐富，味道也很甜很好吃。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "活潑果實"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "樹葉"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card