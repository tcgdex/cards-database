import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝席多藍恩"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		'zh-tw': "體內流著如熔岩般滾燙的血液。 棲息在火山的洞穴裡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "激狂轟炸"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×70點傷害。"
		},

		damage: "70×",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card