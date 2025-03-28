import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍巴魯托ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "噴射頭擊"
		},

		damage: 70,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "幻影奇襲"
		},

		effect: {
			'zh-tw': "將6個傷害指示物以任意方式放置於對手的備戰寶可夢身上。"
		},

		damage: 200,
		cost: ["Fire", "Psychic"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card