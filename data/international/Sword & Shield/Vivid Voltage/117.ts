import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [375],

	name: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'de-de': "Metang"
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
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'es-es': "Beldum",
		'it-it': "Beldum",
		'pt-br': "Beldum",
		'de-de': "Tanhel"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe Acier",
				'es-es': "Garra Metal",
				'it-it': "Ferrartigli",
				'pt-br': "Garra de Metal",
				'de-de': "Metallklaue"
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
				'en-us': "Magnetic Blast",
				'fr-fr': "Explosion Magnétique",
				'es-es': "Explosión Magnética",
				'it-it': "Magnetebomba",
				'pt-br': "Explosão Magnética",
				'de-de': "Magnetstoß"
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


	stage: "Stage1",

	description: {
		'en-us': "It flies at high speeds around the skies. When it finds its prey, Metang takes a firm grip with its sharp claws and never lets go."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512295,
				tcgplayer: 226571
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512295,
				tcgplayer: 226571
			}
		},
	],
}

export default card
