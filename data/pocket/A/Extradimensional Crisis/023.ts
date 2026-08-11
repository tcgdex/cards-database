import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Clefable",
		'fr-fr': "Mélodelfe"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [36],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Clefairy"
	},

	description: {
		'en-us': "A timid fairy Pokémon that is rarely seen, it will\nrun and hide the moment it senses people.",
		'fr-fr': "Ce Pokémon s'apparente à une petite fée qui n'apparaît que rarement devant les humains. Il court se cacher dès qu'il ressent une présence."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Moon Kick",
			'fr-fr': "Coup d'Pied Lunaire"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card