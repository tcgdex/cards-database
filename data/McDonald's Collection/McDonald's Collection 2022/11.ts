import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
		es: "Cutiefly",
		it: "Cutiefly",
		pt: "Cutiefly",
		de: "Wommel"
	},

	illustrator: "Yukiko Baba",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [742],

	hp: 40,

	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
				es: "Viento Feérico",
				it: "Vento di Fata",
				pt: "Vento de Fada",
				de: "Feenbrise"
			},
			damage: 10,
		},
	],

	weaknesses: [
		{
			type: "Metal",
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

