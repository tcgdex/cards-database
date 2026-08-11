import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	dexId: [381],
	set: Set,

	name: {
		'en-us': "Latios",
		'fr-fr': "Latios",
		'es-es': "Latios",
		'it-it': "Latios",
		'pt-br': "Latios",
		'de-de': "Latios"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",

	description: {
		'en-us': "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Supersonic Flight",
			'fr-fr': "Voyage Supersonique"
		},

		damage: 40,

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}, {
		name: {
			'en-us': "Psyburn",
			'fr-fr': "Brûlure Psy"
		},

		damage: 70
	}],

	hp: 110,
	types: ["Psychic"],
	retreat: 1,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98367
	}
}

export default card