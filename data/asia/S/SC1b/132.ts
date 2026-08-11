import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛辮羊"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "捲捲的體毛彈性十足。就算從懸崖上掉下去，也不會受傷。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "膨脹"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-10」點。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
