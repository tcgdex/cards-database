import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨金怪VMAX"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨衝刺"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢「極巨衝刺」的傷害「+150」點。"
		},

		damage: 100,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card