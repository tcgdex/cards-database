import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "甜竹竹"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "受到襲擊時流下的汗水非常甜美可口。那種香氣會吸引更多敵人的注意。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "羽擊"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card