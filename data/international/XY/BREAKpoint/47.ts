import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Luxray BREAK",
		'fr-fr': "Luxray TURBO",
		'es-es': "Luxray TURBO",
		'it-it': "Luxray TURBO",
		'pt-br': "Luxray TURBO",
		'de-de': "Luxtra-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		405,
	],

	hp: 170,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wild Fury",
				'fr-fr': "Furie Sauvage",
				'es-es': "Furia Salvaje",
				'it-it': "Urtoferoce",
				'pt-br': "Fúria Selvagem",
				'de-de': "Wilde Wut"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño más por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 40 de danos adicionais para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 40 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "130+",

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 288222,
		tcgplayer: 111554
	}
}

export default card
