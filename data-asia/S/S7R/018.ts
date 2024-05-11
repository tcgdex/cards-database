import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大舌貝"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "堅硬的殼能反彈任何攻擊。如果在殼張開時被攻擊到內部，就會變得十分脆弱。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "舌擊"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "飛濺"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card