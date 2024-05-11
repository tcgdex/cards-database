import { Card } from "../../../interfaces"
import Set from "../S6H"

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

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card