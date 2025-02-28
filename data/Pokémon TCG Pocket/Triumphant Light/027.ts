import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Electrike"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "It stores static electricity in its fur for discharging.<br />It gives off sparks if a storm approaches."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Zap Kick"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card