import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨鉗螳螂VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "堅硬之剪"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		},

		damage: 90,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "極巨鋼鐵"
		},

		damage: 190,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
