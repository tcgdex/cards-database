import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Spritzee",
		'fr-fr': "Fluvetin",
		'es-es': "Spritzee",
		'it-it': "Spritzee",
		'pt-br': "Spritzee",
		'de-de': "Parfi"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		682,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nap",
				'fr-fr': "Tit’Sieste",
				'es-es': "Siesta",
				'it-it': "Pausa",
				'pt-br': "Soneca",
				'de-de': "Nickerchen"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 pontos de dano deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Fairy Wind",
				'fr-fr': "Vent Féérique",
				'es-es': "Viento Feérico",
				'it-it': "Vento di Fata",
				'pt-br': "Vento de Fada",
				'de-de': "Feenbrise"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It emits a scent that enraptures those who smell it. This fragrance changes depending on what it has eaten.",
	},

	thirdParty: {
		cardmarket: 372427,
		tcgplayer: 189241
	}
}

export default card
