import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth",
		fr: "Miaouss",
		de: "Mauzi",
		es: "Meowth",
		it: "Meowth",
		'es-mx': "Meowth"
	},

	illustrator: "OKUBO",
	rarity: "Illustration rare",
	category: "Pokemon",
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
			'es-mx': "Día de Pago"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			'es-mx': "Roba 1 carta."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card