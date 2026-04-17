import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [180],

	hp: 100,

	types: ["Lightning"],

	stage: "Stage1",

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
		es: "Mareep",
		it: "Mareep",
		pt: "Mareep",
		de: "Voltilamm"
	},

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
			},
			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670474,
				tcgplayer: 281478
			}
		}
	]
}

export default card

