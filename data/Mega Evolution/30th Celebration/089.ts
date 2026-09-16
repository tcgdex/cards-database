import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Meowth",
		fr: "Miaouss d'Alola",
		de: "Alola-Mauzi",
		es: "Meowth de Alola",
		it: "Meowth di Alola",
		'es-mx': "Meowth de Alola"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
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

		damage: 10
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card