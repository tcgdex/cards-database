import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Blacephalon",
		'es-es': "Blacephalon"
	},

	illustrator: "Hasuno",
	rarity: "None",
	category: "Pokemon",

	dexId: [806],
	hp: 100,
	types: ["Fire"],

	description: {
		'en-us': "It slithers toward people. Then, without warning, it triggers the\nexplosion of its own head. It's apparently one kind of Ultra Beast.",
		'es-es': "Parece ser uno de los temibles Ultraentes. Se acerca a la gente\ncontoneándose y hace explotar su propia cabeza súbitamente",

	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Beat Punk",
			'es-es': "Beat Punk"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 70 damage to itself.",
			'es-es': "Este Pokémon también se hace 70 puntos de daño a si mismo"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol9"]
}

export default card