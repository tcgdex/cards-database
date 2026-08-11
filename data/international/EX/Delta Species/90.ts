import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Great Ball",
		fr: "Super Ball",
		de: "Superball"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for a Basic Pokémon (excluding Pokémon-ex) and put it onto your Bench. Shuffle your deck afterward.",
		fr: "Choisissez dans votre deck un Pokémon de base (Pokémon-ex exclus) et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		de: "Search you deck for a Basic Pokémon (excluding Pokémon-ex) and put it onto your Bench. Shuffle your deck afterward."
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
