import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Sunflora",
		'fr-fr': "Heliatronc lumineux",
		'de-de': "Helles Sonnflora"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		192,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reflected Sunlight",
				'fr-fr': "Reflet du soleil",
				'de-de': "Reflected Sunlight"
			},
			effect: {
				'en-us': "Attach up to 2 Energy cards from your hand to 1 of your Pokémon.",
				'fr-fr': "Attachez jusqu'à 2 cartes Énergie  de votre main à l'un de vos Pokémon .",
				'de-de': "Attached up to 2  Energy cards from your hand to 1 of your  Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Solarbeam",
				'fr-fr': "Lance-soleil",
				'de-de': "Solarbeam"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Although it is extremely active during the day, it stops moving entirely as soon as the sun sets.",
		'fr-fr': "Bien qu'extrêmement actif durant la journée, il cesse de bouger dès que le soleil se couche."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274724,
				tcgplayer: 86749
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274724,
				tcgplayer: 86749
			}
		}
	]
}

export default card
