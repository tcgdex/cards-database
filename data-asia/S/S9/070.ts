import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪組"
	},

	illustrator: "Hataya",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "如果認真起來，大齒輪外圈的齒輪會和小齒輪完全接合。 此時轉速將會大幅提升。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "光束"
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "防守壓制"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
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
	regulationMark: "F"
}

export default card