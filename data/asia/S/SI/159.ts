import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "莫魯貝可"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "瞄準電光"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card