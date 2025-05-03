import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Jigglypuff"
	},

	illustrator: "Tomowaka",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rollout"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card