import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿柏怪"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "勒緊的力量非常強大，連鐵桶都能擠扁。一旦被纏住就絕對無法逃脫。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "銳利之牙"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "尾鞭"
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
