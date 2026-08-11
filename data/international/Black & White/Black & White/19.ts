import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Emboar",
		'fr-fr': "Roitiflam",
		'es-es': "Emboar",
		'it-it': "Emboar",
		'pt-br': "Emboar",
		'de-de': "Flambirex"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		500,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Crash",
				'fr-fr': "Tacle Feu",
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flare Blitz",
				'fr-fr': "Boutefeu",
			},
			effect: {
				'en-us': "Discard all Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It can throw a fire punch by setting its fists on fire with its fiery chin. It cares deeply about its friends.",
	},

	thirdParty: {
		cardmarket: 279757,
		tcgplayer: 85181
	}
}

export default card
