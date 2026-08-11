import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pain-Full Punch",
				'fr-fr': "Mise au Poing",
				'es-es': "Puño Doloroso",
				'it-it': "Dolorpugno",
				'pt-br': "Soco Doloroso",
				'de-de': "Schmerzhafter Hieb"
			},

			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Mach Bolt",
				'fr-fr': "Éclair Fulgurant",
				'es-es': "Rayo Mach",
				'it-it': "Fulmine Mach",
				'pt-br': "Raio Supersônico",
				'de-de': "Flotter Sprung"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
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
		'en-us': "Its long tail serves as a ground to protect itself from its own high-voltage power."
	},

	dexId: [26],

	thirdParty: {
		cardmarket: 436464,
		tcgplayer: 208363
	}
}

export default card
