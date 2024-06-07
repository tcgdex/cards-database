import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪機雅娜"
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "由大約５００年前的 科學家所製造。 本體是被稱為魂心的零件。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "齒輪刀"
		},

		effect: {
			'zh-tw': "#N/A"
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "機關光束"
		},

		damage: "60+",
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

	retreat: 1,
	regulationMark: "F"
}

export default card