import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mew ex",
		'fr-fr': "Mew-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [151],
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Genome Hacking",
			'fr-fr': "Piratage de Génome"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
