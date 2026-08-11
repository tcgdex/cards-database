import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak"
	},

	illustrator: "Scav",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [55],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Psyduck"
	},

	description: {
		'en-us': "When it swims at full speed using its long,\nwebbed limbs, its forehead somehow begins\nto glow.",
		'fr-fr': "Quand il nage à vitesse maximale grâce à ses pattes palmées, son front se met à luire pour une raison inconnue."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Aqua Edge",
			'fr-fr': "Aqua-Dague"
		},

		damage: 70,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card