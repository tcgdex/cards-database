import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Sandslash",
		de: "Dunkles Sandamer"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 70,

	types: [
		"Fighting",
		"Darkness",
	],

	evolveFrom: {
		en: "Sandshrew",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Payback",
				de: "Poison Payback"
			},
			effect: {
				en: "If Dark Sandslash is your Active Pokémon and is damaged by an opponent's attack (even if Dark Sandslash is Knocked Out), the Attacking Pokémon is now Poisoned.",
				de: "If Dark Sandslash is your Active Pokémon and is damaged by an opponent's attack (even if Dark Sandslash is Knocked Out), the Attacking Pokémon is now Poisoned."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift",
				de: "Swift"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				de: "This attack's damage isn't affected by Weakness, resistance, Poke-Pwers, Poke-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276310,
		tcgplayer: 84651
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

