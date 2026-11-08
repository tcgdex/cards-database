import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Galarian Runerigus",
		'fr-fr': "Tutétékri de Galar",
		'es-es': "Runerigus de Galar",
		'it-it': "Runerigus di Galar",
		'pt-br': "Runerigus de Galar",
		'de-de': "Galar-Oghnatoll"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [867],
	set: Set,

	evolveFrom: {
		'en-us': "Galarian Yamask",
		'fr-fr': "Tutafeh de Galar",
		'es-es': "Yamask de Galar",
		'it-it': "Yamask di Galar",
		'pt-br': "Yamask de Galar",
		'de-de': "Galar-Makabaja"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spreading Spite",
				'fr-fr': "Mépris Réparti",
				'es-es': "Esparcir Rencor",
				'it-it': "Spargidispetti",
				'pt-br': "Disseminar Rancor",
				'de-de': "Boshafte Ausbreitung"
			},
			effect: {
				'en-us': "For each damage counter on this Galarian Runerigus, put 2 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Pour chaque marqueur de dégâts sur ce Tutétékri de Galar, placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
				'es-es': "Por cada contador de daño en este Runerigus de Galar, pon 2 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Per ogni segnalino danno presente su questo Runerigus di Galar, metti due segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
				'pt-br': "Para cada contador de dano neste Runerigus de Galar, coloque 2 contadores de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Lege für jede Schadensmarke auf diesem Galar-Oghnatoll 2 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mad Hammer",
				'fr-fr': "Marteau en Folie",
				'es-es': "Martillo Enloquecido",
				'it-it': "Martello Pazzo",
				'pt-br': "Martelo Insano",
				'de-de': "Verrückter Hammer"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 100,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "A powerful curse was woven into an ancient painting. After absorbing the spirit of a Yamask, the painting began to move."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457923,
				tcgplayer: 213190
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457923,
				tcgplayer: 213190
			}
		},
	],
}

export default card
