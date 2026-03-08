import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Magneton",
		de: "Dunkles Magneton"
	},

	illustrator: "Emi Miwa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 70,

	types: [
		"Lightning",
		"Darkness",
	],

	evolveFrom: {
		en: "Magnemite",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Magnetic Lines",
				de: "Magnetic Lines"
			},
			effect: {
				en: "If your opponent has at least 2 Pokémon in play, move a basic Energy card from the Defending Pokémon to another of your opponent's Pokémon.",
				de: "If your opponent has at least 2 Pokémon in play, move a basic Energy card from the Defending Pokémon to another of your opponent's Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Pulse",
				de: "Poison Pulse"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				de: "The Defending Pokémon is now Poisoned."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276331,
		tcgplayer: 84626
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

