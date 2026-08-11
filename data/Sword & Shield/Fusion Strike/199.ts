import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [52],
	set: Set,

	name: {
		en: "Meowth",
		fr: "Miaouss",
		es: "Meowth",
		it: "Meowth",
		pt: "Meowth",
		de: "Mauzi"
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
		en: "It washes its face regularly to keep the coin on its forehead spotless. It doesn't get along with Galarian Meowth."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pay Day",
			fr: "Jackpot",
			de: "Zahltag",
			es: "Día de Pago",
			pt: "Dia de Pagamento",
			it: "Giornopaga"
		},

		damage: 10,

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			es: "Roba 1 carta.",
			pt: "Compre 1 carta.",
			it: "Pesca una carta."
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
