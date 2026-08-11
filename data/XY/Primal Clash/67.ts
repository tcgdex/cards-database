import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Nidorina",
		fr: "Nidorina",
		es: "Nidorina",
		it: "Nidorina",
		pt: "Nidorina",
		de: "Nidorina"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		30,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
		es: "Nidoran♀",
		it: "Nidoran♀",
		pt: "Nidoran♀",
		de: "Nidoran♀"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Strength",
				fr: "Force",
				es: "Fuerza",
				it: "Forza",
				pt: "Força",
				de: "Stärke"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "When feeding its young, it first chews the food into a paste, then spits it out for the offspring.",
	},

	thirdParty: {
		cardmarket: 273598,
		tcgplayer: 95965
	}
}

export default card
