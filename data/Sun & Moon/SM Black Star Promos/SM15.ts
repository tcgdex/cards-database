import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
		es: "Zygarde",
		it: "Zygarde",
		pt: "Zygarde",
		de: "Zygarde"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 130,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pulse Blast",
				fr: "Explosion vibrante",
				es: "Pulso explosivo",
				it: "Scoppimpulso",
				pt: "Pulso Explosivo",
				de: "Pulsierender Schuss"
			},

			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Land’s Wrath",
				fr: "Force Chtonienne",
				es: "Fuerza Telúrica",
				it: "Forza Tellurica",
				pt: "Ira da Terra",
				de: "Bodengewalt"
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
