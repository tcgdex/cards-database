import { Card } from 'models/database/card'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	illustrator: "Framestore",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Panic",
				'fr-fr': "Panique",
				'es-es': "Pánico",
				'it-it': "Ansia",
				'pt-br': "Pânico",
				'de-de': "Panik"
			},
			effect: {
				'en-us': "This Pokémon is now Confused.",
				'fr-fr': "Ce Pokémon est maintenant Confus.",
				'es-es': "Este Pokémon pasa a estar Confundido.",
				'it-it': "Questo Pokémon viene confuso.",
				'pt-br': "Este Pokémon agora está Confuso.",
				'de-de': "Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Using psychokinesis gives it a headache, so it normally passes the time spacing out and doing as little as possible.",
	},

	thirdParty: {
		cardmarket: 370626,
		tcgplayer: 186010
	}
}

export default card
