import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
		'es-es': "Nidorino",
		'it-it': "Nidorino",
		'pt-br': "Nidorino",
		'de-de': "Nidorino"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran♂",
		'es-es': "Nidoran♂",
		'it-it': "Nidoran♂",
		'pt-br': "Nidoran♂",
		'de-de': "Nidoran♂"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud'Korne",
				'es-es': "Cornada",
				'it-it': "Incornata",
				'pt-br': "Ataque de Chifre",
				'de-de': "Hornattacke"
			},

			damage: 20,

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
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is easily angered. By swinging its well-developed horn wildly, it can even punch through diamond.",
	},

	thirdParty: {
		cardmarket: 293399,
		tcgplayer: 124057
	}
}

export default card
