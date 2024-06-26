import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "墨海馬"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "棲息在海流平穩的海域。 被襲擊時會吐出漆黑的 墨汁，然後趁機逃走。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "紋絲不動"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "鰭快刀"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card