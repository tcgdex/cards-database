import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Sprigatito",
		fr: "Poussacha",
		es: "Sprigatito",
		it: "Sprigatito",
		pt: "Sprigatito",
		de: "Felori"
	},

	illustrator: "Saya Tsuruta",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [906],

	hp: 60,

	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
				es: "Bomba Germen",
				it: "Semebomba",
				pt: "Bomba de Sementes",
				de: "Samenbomben"
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

