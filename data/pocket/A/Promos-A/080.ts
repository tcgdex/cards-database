import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stakataka",
		'es-es': "Stakataka"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [805],
	hp: 110,
	types: ["Metal"],

	description: {
		'en-us': "It appeared from an Ultra Wormhole. Each one\nappears to be made up of many life-forms\nstacked one on top of each other.",
		'es-es': "Surgió de un Ultraumbral. Parece estar compuesto de varias\n criaturas que se han combinado para formar un solo ser."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Brass Rock",
			'es-es': "Brass Rock"
		},

		damage: 40,
		cost: ["Metal", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["vol9"]
}

export default card