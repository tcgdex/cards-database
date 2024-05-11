import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大王銅象VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Metal"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "危險之鼻"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為【基礎】寶可夢，則增加100點傷害。"
		},

		damage: "100+",
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "超極巨名錘青史"
		},

		damage: 240,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card