import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "艾路雷朵"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	description: {
		'zh-tw': "能夠敏銳地感知到尋求幫助的感情，並且火速趕去援助對方。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "佯攻"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 60,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "力之利刃"
		},

		effect: {
			'zh-tw': "造成對手的場上的「寶可夢【V】」的數量×60點傷害。"
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card