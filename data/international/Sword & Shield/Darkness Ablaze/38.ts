import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [349],

	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 30,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
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
				'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 pontos de dano deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Although unattractive and unpopular, this Pokémon's marvelous vitality has made it a subject of research."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483064,
				tcgplayer: 219275
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483064,
				tcgplayer: 219275
			}
		},
	],
}

export default card
