import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Koffing",
		de: "Smogon"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		109,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Knockout Gas",
				de: "Knockout Gas"
			},
			effect: {
				en: "If Koffing is your Active Pokémon and is Knocked Out by an opponent's attack, the Attacking Pokémon is now Confused and Poisoned.",
				de: "If Koffing is your Active Pokémon and is Knocked Out by an opponent's attack, the Attacking Pokémon is now Confused and Poisoned."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				de: "Gnaw"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276353,
		tcgplayer: 86493
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

