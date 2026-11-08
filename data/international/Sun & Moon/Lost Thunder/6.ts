import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'es-es': "Chikorita",
		'it-it': "Chikorita",
		'pt-br': "Chikorita",
		'de-de': "Endivie"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Mini Drain",
				'fr-fr': "Mini-Assèchement",
				'es-es': "Minidrenaje",
				'it-it': "Miniassorbimento",
				'pt-br': "Minidreno",
				'de-de': "Minisauger"
			},
			effect: {
				'en-us': "Heal 10 damage from this Pokémon.",
				'fr-fr': "Soignez 10 dégâts à ce Pokémon.",
				'es-es': "Cura 10 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 10 danni.",
				'pt-br': "Cure 10 pontos de dano deste Pokémon.",
				'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It uses the leaf on its head to determine the temperature and humidity. It loves to sunbathe.",
	},

	thirdParty: {
		cardmarket: 365573,
		tcgplayer: 178803
	}
}

export default card
