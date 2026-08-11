import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [53],
	set: Set,

	name: {
		'en-us': "Persian",
		'fr-fr': "Persian",
		'es-es': "Persian",
		'it-it': "Persian",
		'pt-br': "Persian",
		'de-de': "Snobilikat"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Lee HyunJung",

	description: {
		'en-us': "Its elegant and refined behavior clashes with that of the barbaric Perrserker. The relationship between the two is one of mutual disdain."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Pay Day",
			'fr-fr': "Jackpot",
			'de-de': "Zahltag",
			'es-es': "Día de Pago",
			'pt-br': "Dia de Pagamento",
			'it-it': "Giornopaga"
		},

		damage: 30,

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre 1 carta.",
			'it-it': "Pesca una carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso"
		},

		damage: 70
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582874,
				tcgplayer: 253292
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582874,
				tcgplayer: 253292
			}
		},
	],
}

export default card
