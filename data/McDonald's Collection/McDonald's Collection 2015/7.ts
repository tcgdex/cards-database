import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		309,
	],
	set: Set,
	name: {
		en: "Electrike",
		fr: "Dynavolt",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Lightning",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge",
				fr: "Chargeur",
			},
			effect: {
				en: "Search your deck for a lightning energy card and attach it to this Pokémon. shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie  dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},
			damage: "20",
		},
	],

	illustrator: "Sumiyoshi Kizuki",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293323,
				tcgplayer: 110428
			}
		}
	]
}

export default card
