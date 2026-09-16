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

	illustrator: "Naoyo Kimura",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Nighttime Stroll",
			fr: "Promenade Nocturne",
			de: "Nachtspaziergang",
			es: "Paseo Nocturno",
			it: "Passeggiata Notturna",
			'es-mx': "Paseo Nocturno"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			'es-mx': "Roba 1 carta."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			de: "Statischer Schock",
			es: "Impacto Estático",
			it: "Shock Statico",
			'es-mx': "Impacto Estático"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card