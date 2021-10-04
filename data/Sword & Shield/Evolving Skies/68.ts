import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Woobat",
		fr: "Chovsourir",
		es: "Woobat",
		it: "Woobat",
		pt: "Woobat",
		de: "Fleknoil"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Yuka Morii",

	attacks: [{
		name: {
			en: "Collect",
			fr: "Collecte",
			es: "Coleccionar",
			it: "Tassa",
			pt: "Collect",
			de: "Sammeln"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Draw a card.",
			de: "Ziehe 1 Karte."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Gnaw",
			de: "Nagen"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	description: {
		en: "It emits ultrasonic waves as it flutters about, searching for its prey—bug Pokémon."
	},

	dexId: [527]
}

export default card