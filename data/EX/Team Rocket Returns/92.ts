import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Swoop! Teleporter",
		de: "Swoop! Teleporter*"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Rocket's Secret Machine",

	effect: {
		de: "Search your deck for a Basic Pokémon (excluding Pokémon-ex) and switch it with 1 of your Basic Pokémon (excluding Pokémon-ex) in play. (Any cards attached to that Pokémon, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Place the first Basic Pokémon in the discard pile. Shuffle your deck afterward."
	},

	thirdParty: {
		cardmarket: 276384,
		tcgplayer: 89728
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["curran-hill"]
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"]
		}
	]
}

export default card
