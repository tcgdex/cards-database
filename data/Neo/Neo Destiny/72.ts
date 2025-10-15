import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Sunflora",
		fr: "Heliatronc lumineux",
		de: "Helles Sonnflora"
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
		en: "Sunkern",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reflected Sunlight",
				fr: "Reflet du soleil",
				de: "Reflected Sunlight"
			},
			effect: {
				en: "Attach up to 2 Energy cards from your hand to 1 of your Pokémon.",
				fr: "Attachez jusqu'à 2 cartes Énergie  de votre main à l'un de vos Pokémon .",
				de: "Attached up to 2  Energy cards from your hand to 1 of your  Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Solarbeam",
				fr: "Lance-soleil",
				de: "Solarbeam"
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

	description: {
		fr: "Bien qu'extrêmement actif durant la journée, il cesse de bouger dès que le soleil se couche."
	},

	thirdParty: {
		cardmarket: 274724,
		tcgplayer: 86749
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
