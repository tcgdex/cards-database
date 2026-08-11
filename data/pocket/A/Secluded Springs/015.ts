import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool"
	},

	illustrator: "Hajime Kusajima",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [72],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "Tentacool is not a particularly strong swimmer.\nIt drifts across the surface of shallow seas as it\nsearches for prey.",
		'fr-fr': "Peu doué pour la natation, ce Pokémon se contente de flotter à la surface des eaux peu profondes pour chasser ses proies."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Poison Sting",
			'fr-fr': "Dard-Venin"
		},

		damage: 20,
		cost: ["Water", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card