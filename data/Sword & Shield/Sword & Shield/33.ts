import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Raboot",
		fr: "Lapyro",
		es: "Raboot",
		it: "Raboot",
		pt: "Raboot",
		de: "Kickerlo"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Scorbunny",
		fr: "Flambino",
		es: "Scorbunny",
		it: "Scorbunny",
		pt: "Scorbunny",
		de: "Hopplo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Kick",
				fr: "Koud'Pied",
				es: "Patada",
				it: "Calcio",
				pt: "Chute",
				de: "Tritt"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
				es: "Explosión de Calor",
				it: "Caldobomba",
				pt: "Raio de Calor",
				de: "Hitzestoß"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Its thick and fluffy fur protects it from the cold and enables it to use hotter fire moves."
	},

	dexId: [814],

	thirdParty: {
		cardmarket: 436319,
		tcgplayer: 208311
	}
}

export default card
