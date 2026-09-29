import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu",
		pt: "Pikachu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
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
			'es-mx': "Paseo Nocturno",
			pt: "Caminhada Noturna"
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

		cost: ["Colorless"]
	}, {
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			de: "Statischer Schock",
			es: "Impacto Estático",
			it: "Shock Statico",
			'es-mx': "Impacto Estático",
			pt: "Choque de Estática"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907652,
				tcgplayer: 716314
			}
		}
	],
}

export default card
