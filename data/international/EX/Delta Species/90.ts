import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Great Ball",
		'fr-fr': "Super Ball",
		'de-de': "Superball"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck for a Basic Pokémon (excluding Pokémon-ex) and put it onto your Bench. Shuffle your deck afterward.",
		'fr-fr': "Choisissez dans votre deck un Pokémon de base (Pokémon-ex exclus) et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		'de-de': "Search you deck for a Basic Pokémon (excluding Pokémon-ex) and put it onto your Bench. Shuffle your deck afterward."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 276853,
		tcgplayer: 85896
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["miska-saari"]
		},
	]
}

export default card
