import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴噬龜"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "頸部可以伸縮。能從遠處迅速伸長頸部，用銳利的牙齒解決對手。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "堅硬身軀"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "火箭頭錘"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card