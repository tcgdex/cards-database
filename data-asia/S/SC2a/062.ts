import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布魯"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "臉看起來很嚴厲，但其實相當膽小。那拼命作出威嚇的表情很受女性歡迎。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "銳利之牙"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
