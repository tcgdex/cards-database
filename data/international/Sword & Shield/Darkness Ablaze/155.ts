import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [822],

	name: {
		'en-us': "Corvisquire",
		'fr-fr': "Bleuseille",
		'es-es': "Corvisquire",
		'it-it': "Corvisquire",
		'pt-br': "Corvisquire",
		'de-de': "Kranoviz"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rookidee",
		'fr-fr': "Minisange",
		'es-es': "Rookidee",
		'it-it': "Rookidee",
		'pt-br': "Rookidee",
		'de-de': "Meikro"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Pikser"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Attack",
				'fr-fr': "Furie",
				'es-es': "Ataque Furia",
				'it-it': "Furia",
				'pt-br': "Ataque de Fúria",
				'de-de': "Furienschlag"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 40 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Smart enough to use tools in battle, these Pokémon have been seen picking up rocks and flinging them or using ropes to wrap up enemies."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483654,
				tcgplayer: 219370
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483654,
				tcgplayer: 219370
			}
		},
	],
}

export default card
