import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈咬陸鯊V"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "龍爪"
		},

		damage: 120,
		cost: ["Water", "Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "音波強襲"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的3個能量丟棄，對手的1隻寶可夢受到220點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Fighting", "Fighting", "Colorless"]
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card