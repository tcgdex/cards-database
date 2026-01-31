import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Scratch"
			},

			damage: 10,

		},
		{
			name: {
				en: "Ascension",
				fr: "Ascension",
				de: "Ascension"
			},

			effect: {
				en: "Search your deck for a card that evolves from Vulpix and put it on Vulpix. (This counts as evolving Vulpix.) Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte qui évolue de Goupix et placez-la sur Goupix. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				de: "Search your deck for a card that evolves from Vulpix and put it on Vulpix. (This counts as evolving Vulpix.) Shuffle your deck afterward."
			},

			cost: ["Fire"]
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276155,
		tcgplayer: 90437
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
