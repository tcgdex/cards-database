import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Qwilfish",
		'fr-fr': "Qwilfish"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [211],
	hp: 80,
	types: ["Water"],

	description: {
		'en-us': "Be cautious if this Pokémon starts sucking in\nwater—it will soon attack by scattering the toxic\nspikes that grow all over its body.",
		'fr-fr': "S'il se met à avaler de l'eau, cela signifie qu'il s'apprête à attaquer en projetant les épines empoisonnées qui poussent sur son corps."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Poison Sting",
			'fr-fr': "Dard-Venin"
		},

		damage: 20,
		cost: ["Water"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card