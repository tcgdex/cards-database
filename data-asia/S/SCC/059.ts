import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷伊布VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨迅雷"
		},

		effect: {
			'zh-tw': "對手的身上放置有傷害指示物的1隻備戰寶可夢也受到100點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 100,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card