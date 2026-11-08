import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'es-es': "Klang",
		'it-it': "Klang",
		'pt-br': "Klang",
		'de-de': "Kliklak"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		600,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Klink",
		'fr-fr': "Tic",
		'es-es': "Klink",
		'it-it': "Klink",
		'pt-br': "Klink",
		'de-de': "Klikk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Vice Grip",
				'fr-fr': "Force Poigne",
				'es-es': "Agarre",
				'it-it': "Presa",
				'pt-br': "Agarramento Viciado",
				'de-de': "Klammer"
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Disorderly Flip",
				'fr-fr': "Renverse Désordre",
				'es-es': "Vuelta Indisciplinada",
				'it-it': "Girosmodato",
				'pt-br': "Virada Desordenada",
				'de-de': "Zügelloser Überschlag"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A minigear and big gear comprise its body. If the minigear it launches at a foe doesn't return, it will die.",
	},

	thirdParty: {
		cardmarket: 291638,
		tcgplayer: 121201
	}
}

export default card
