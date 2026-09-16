import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Peer At",
			fr: "Scrutation",
			de: "Beäugen",
			es: "Curiosear",
			it: "Scrutare",
			'es-mx': "Curiosear"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire montre sa main.",
			de: "Dein Gegner zeigt dir seine Handkarten.",
			es: "Tu rival enseña las cartas de su mano.",
			it: "Il tuo avversario mostra le carte che ha in mano.",
			'es-mx': "Tu rival muestra su mano."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card