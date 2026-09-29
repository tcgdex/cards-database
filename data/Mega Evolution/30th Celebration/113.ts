import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It loves things that sparkle. When it sees a shiny object, the gold coin on its head shines, too."
	},

	name: {
		en: "Meowth",
		fr: "Miaouss",
		de: "Mauzi",
		es: "Meowth",
		it: "Meowth",
		'es-mx': "Meowth",
		pt: "Meowth"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pay Day",
			fr: "Jackpot",
			de: "Zahltag",
			es: "Día de Pago",
			it: "Giornopaga",
			'es-mx': "Día de Pago",
			pt: "Dia de Pagamento"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			'es-mx': "Roba 1 carta.",
			pt: "Compre uma carta."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907720,
				tcgplayer: 714356
			}
		}
	],
}

export default card
