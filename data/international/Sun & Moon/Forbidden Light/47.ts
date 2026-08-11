import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		679,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Metal Sound",
				'fr-fr': "Strido-Son",
				'es-es': "Eco Metálico",
				'it-it': "Ferrostrido",
				'pt-br': "Som de Metal",
				'de-de': "Metallsound"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If anyone dares to grab its hilt, it wraps a blue cloth around that person's arm and drains that person's life energy completely.",
	},

	thirdParty: {
		cardmarket: 355565,
		tcgplayer: 165698
	}
}

export default card
