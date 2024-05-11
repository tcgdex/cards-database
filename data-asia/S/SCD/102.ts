import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "莫魯貝可"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "怨氣爆炸"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card