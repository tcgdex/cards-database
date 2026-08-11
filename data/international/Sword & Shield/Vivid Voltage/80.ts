import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'it-it': "Milcery",
		'pt-br': "Milcery",
		'de-de': "Hokumil"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [868],
	set: Set,
	hp: 50,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sweet Scent",
				'fr-fr': "Doux Parfum",
				'es-es': "Dulce Aroma",
				'it-it': "Profumino",
				'pt-br': "Aroma Doce",
				'de-de': "Lockduft"
			},
			effect: {
				'en-us': "Heal 20 damage from 1 of your Pokémon.",
				'fr-fr': "Soignez 20 dégâts de l'un de vos Pokémon.",
				'es-es': "Cura 20 puntos de daño a 1 de tus Pokémon.",
				'it-it': "Cura uno dei tuoi Pokémon da 20 danni.",
				'pt-br': "Cure 20 pontos de dano de 1 dos seus Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
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

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "This Pokémon was born from sweet-smelling particles in the air. Its body is made of cream."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511820,
				tcgplayer: 226488
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511820,
				tcgplayer: 226488
			}
		},
	],
}

export default card
