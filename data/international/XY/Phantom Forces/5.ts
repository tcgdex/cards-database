import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Sewaddle",
		'fr-fr': "Larveyette",
		'es-es': "Sewaddle",
		'it-it': "Sewaddle",
		'pt-br': "Sewaddle",
		'de-de': "Strawickl"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		540,
	],

	hp: 50,

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
				'en-us': "Nap",
				'fr-fr': "Tit'Sieste",
				'es-es': "Siesta",
				'it-it': "Pausa",
				'pt-br': "Soneca",
				'de-de': "Nickerchen"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Bug Bite",
				'fr-fr': "Piqûre",
				'es-es': "Picadura",
				'it-it': "Coleomorso",
				'pt-br': "Picada",
				'de-de': "Käferbiss"
			},

			damage: 20,

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
		'en-us': "This Pokémon makes clothes for itself. It chews up leaves and sews them with sticky thread extruded from its mouth.",
	},

	thirdParty: {
		cardmarket: 281806,
		tcgplayer: 94138
	}
}

export default card
