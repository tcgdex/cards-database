import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'it-it': "Milcery",
		'pt-br': "Milcery",
		'de-de': "Hokumil"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [868],
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Aromatherapy",
				'fr-fr': "Aromathérapie",
				'es-es': "Aromaterapia",
				'it-it': "Aromaterapia",
				'pt-br': "Aromaterapia",
				'de-de': "Aromakur"
			},
			effect: {
				'en-us': "Heal 10 damage from each of your Pokémon.",
				'fr-fr': "Soignez 10 dégâts de chacun de vos Pokémon.",
				'es-es': "Cura 10 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Cura ciascuno dei tuoi Pokémon da 10 danni.",
				'pt-br': "Cure 10 pontos de dano de cada um dos seus Pokémon.",
				'de-de': "Heile 10 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
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

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 50,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "This Pokémon was born from sweet-smelling particles in the air. Its body is made of cream."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457848,
				tcgplayer: 213172
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457848,
				tcgplayer: 213172
			}
		},
	],
}

export default card
