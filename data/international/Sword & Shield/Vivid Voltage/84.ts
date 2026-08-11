import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [195],

	name: {
		'en-us': "Quagsire",
		'fr-fr': "Maraiste",
		'es-es': "Quagsire",
		'it-it': "Quagsire",
		'pt-br': "Quagsire",
		'de-de': "Morlord"
	},

	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
		'es-es': "Wooper",
		'it-it': "Wooper",
		'pt-br': "Wooper",
		'de-de': "Felino"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'es-es': "Toque",
				'it-it': "Battuta",
				'pt-br': "Pulso",
				'de-de': "Verprügler"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fickle Impact",
				'fr-fr': "Frappe Capricieuse",
				'es-es': "Impacto Impredecible",
				'it-it': "Impatto Bislacco",
				'pt-br': "Impacto Errático",
				'de-de': "Launischer Einschlag"
			},
			effect: {
				'en-us': "If you have exactly 2, 4, or 6 Prize cards remaining, this attack does nothing.",
				'fr-fr': "S'il vous reste exactement 2, 4 ou 6 cartes Récompense, cette attaque ne fait rien.",
				'es-es': "Si te quedan exactamente 2, 4 o 6 cartas de Premio, este ataque no hace nada.",
				'it-it': "Se hai esattamente due, quattro o sei carte Premio rimanenti, questo attacco non ha effetto.",
				'pt-br': "Se você tiver exatamente 2, 4 ou 6 cartas de Prêmio restantes, este ataque não fará nada.",
				'de-de': "Wenn du genau 2, 4 oder 6 verbleibende Preiskarten hast, hat diese Attacke keine Auswirkungen."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It has an easygoing nature. It doesn't care if it bumps its head on boats and boulders while swimming."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511840,
				tcgplayer: 226492
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511840,
				tcgplayer: 226492
			}
		},
	],
}

export default card
