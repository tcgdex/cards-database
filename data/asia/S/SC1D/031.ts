import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大舌貝"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "透過２片貝殼的不斷開合來向後方游動。游動的速度相當快。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水沫"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		},

		damage: "20+",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
