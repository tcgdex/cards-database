import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [441],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "It mimics the cries of other Pokémon to trick them\ninto thinking it's one of them. This way they won't\nattack it.",
		'fr-fr': "Il reproduit le cri de ses ennemis pour faire croire qu'il est des leurs et éviter d'être attaqué."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tone-Deaf",
			'fr-fr': "Dur d'Oreille"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card