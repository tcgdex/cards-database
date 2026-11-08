import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [52],
	set: Set,

	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		'en-us': "It washes its face regularly to keep the coin on its forehead spotless. It doesn't get along with Galarian Meowth."
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

		damage: 10,

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre 1 carta.",
			'it-it': "Pesca una carta."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582873,
				tcgplayer: 253291
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582873,
				tcgplayer: 253291
			}
		},
	],
}

export default card
