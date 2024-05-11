import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙河馬"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "體型碩大而笨重，但由於會掘開土壤藏身其中，因此難以發現其蹤跡。 情緒激動時會從鼻中噴出沙子。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擲泥"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "滾動衝撞"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card