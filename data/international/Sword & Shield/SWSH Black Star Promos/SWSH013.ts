import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		'fr-fr': "Ponyta de Galar",
		'en-us': "Galarian Ponyta",
		'es-es': "Ponyta de Galar",
		'it-it': "Ponyta di Galar",
		'pt-br': "Ponyta de Galar",
		'de-de': "Galar-Ponita"
	},

	illustrator: "kirisAki",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'fr-fr': "Vibra Soin",
				'en-us': "Heal Pulse",
				'es-es': "Pulso Cura",
				'it-it': "Ondasana",
				'pt-br': "Pulso da Cura",
				'de-de': "Heilwoge"
			},
			effect: {
				'fr-fr': "Soignez 30 dégâts de l'un de vos Pokémon.",
				'en-us': "Heal 30 damage from 1 of your Pokémon.",
				'es-es': "Cura 30 puntos de daño a 1 de tus Pokémon.",
				'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano de 1 dos seus Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'fr-fr': "Flop",
				'en-us': "Flop",
				'es-es': "Vuelta",
				'it-it': "Tonfo",
				'pt-br': "Baque",
				'de-de': "Plumps"
			},

			damage: 20,

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
			value: "-30"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its small horn hides a healing power. With a few rubs from this Pokémon's horn, any slight wound you have will be healed."
	},

	dexId: [77],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 427111
	}
}

export default card
