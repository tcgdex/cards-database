import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
		'es-es': "Spearow",
		'it-it': "Spearow",
		'pt-br': "Spearow",
		'de-de': "Habitak"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		21,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Glide",
				'fr-fr': "Glissement",
				'es-es': "Planeo",
				'it-it': "Aliante",
				'pt-br': "Planeio",
				'de-de': "Gleiten"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Dive",
				'fr-fr': "Plongée Rapide",
				'es-es': "Picado Rápido",
				'it-it': "Immersione Rapida",
				'pt-br': "Mergulho Veloz",
				'de-de': "Tempohechtsprung"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its reckless nature leads it to stand up to others—even large Pokémon—if it has to protect its territory.",
	},

	thirdParty: {
		cardmarket: 372431,
		tcgplayer: 189245
	}
}

export default card
