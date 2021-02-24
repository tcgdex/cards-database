import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Glameow",
		fr: "Chaglam",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Trainer",

	set: Set,
	dexId: [
		431,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",



	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],

	retreat: 1,
	effect: {
		en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
		fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
	},


}

export default card
