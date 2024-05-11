import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵殼蛹"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "為了不被天敵發現，會躲在葉子背面或樹枝的間隙中， 等待進化的時刻到來。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "凝固"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-40」點。"
		},

		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card