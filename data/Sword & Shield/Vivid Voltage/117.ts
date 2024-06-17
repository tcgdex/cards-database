import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [375],
	name: {
		en: "Metang",
		fr: "Métang",
		es: "Metang",
		it: "Metang",
		pt: "Metang",
		de: "Metang"
	},

	illustrator: "Kazuma Koda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
		es: "Beldum",
		it: "Beldum",
		pt: "Beldum",
		de: "Tanhel"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe Acier",
				es: "Garra Metal",
				it: "Ferrartigli",
				pt: "Garra de Metal",
				de: "Metallklaue"
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnetic Blast",
				fr: "Explosion Magnétique",
				es: "Explosión Magnética",
				it: "Magnetebomba",
				pt: "Explosão Magnética",
				de: "Magnetstoß"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It flies at high speeds around the skies. When it finds its prey, Metang takes a firm grip with its sharp claws and never lets go."
	}
}

export default card
