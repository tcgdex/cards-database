import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		'fr-fr': "Miaouss V",
		'en-us': "Meowth V",
		'es-es': "Meowth V",
		'it-it': "Meowth V",
		'pt-br': "Meowth V",
		'de-de': "Mauzi V"
	},

	illustrator: "aky CG Works",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,
	hp: 180,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'fr-fr': "Jackpot",
				'en-us': "Pay Day",
				'es-es': "Día de Pago",
				'it-it': "Giornopaga",
				'pt-br': "Dia de Pagamento",
				'de-de': "Zahltag"
			},
			effect: {
				'fr-fr': "Piochez une carte.",
				'en-us': "Draw a card.",
				'es-es': "Roba una carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre um card.",
				'de-de': "Ziehe 1 Karte."
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
				'fr-fr': "Griffe Taillante",
				'en-us': "Slashing Claw",
				'es-es': "Garra Cuchillazo",
				'it-it': "Artigli Laceranti",
				'pt-br': "Garra Cortadora",
				'de-de': "Schlitzende Klaue"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	dexId: [52],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 427096
	}
}

export default card
