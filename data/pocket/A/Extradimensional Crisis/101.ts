import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Aerodactyl ex",
		'fr-fr': "Ptéra-ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [142],
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Old Amber"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Primeval Law",
			'fr-fr': "Ordre Primitif"
		},

		effect: {
			'en-us': "Your opponent can't play any Pokémon from their hand to evolve their Active Pokémon.",
			'fr-fr': "Votre adversaire ne peut pas jouer de Pokémon de sa main sur le Pokémon Actif pour le faire évoluer."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre"
		},

		damage: 80,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Shiny"
}

export default card