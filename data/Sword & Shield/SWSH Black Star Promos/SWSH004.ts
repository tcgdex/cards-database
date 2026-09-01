import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Miaouss V",
		en: "Meowth V",
		es: "Meowth V",
		it: "Meowth V",
		pt: "Meowth V",
		de: "Mauzi V"
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
				fr: "Jackpot",
				en: "Pay Day",
				es: "Día de Pago",
				it: "Giornopaga",
				pt: "Dia de Pagamento",
				de: "Zahltag"
			},
			effect: {
				fr: "Piochez une carte.",
				en: "Draw a card.",
				es: "Roba una carta.",
				it: "Pesca una carta.",
				pt: "Compre um card.",
				de: "Ziehe 1 Karte."
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
				fr: "Griffe Taillante",
				en: "Slashing Claw",
				es: "Garra Cuchillazo",
				it: "Artigli Laceranti",
				pt: "Garra Cortadora",
				de: "Schlitzende Klaue"
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

	regulationMark: "D",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 427096,
				tcgplayer: 205465
			}
		},
	],
	suffix: "V"
}

export default card
