import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Weezing",
		de: "Smogmog"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Koffing",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Super Poison Breath",
				de: "Super-Gifthauch"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Explosion",
				de: "Super-Explosion"
			},
			effect: {
				en: "Weezing does 90 damage to itself, and don't apply Weakness to this damage.",
				de: "Smogmog fügt sich selbst 90 Schadenspunkte zu, wende dabei Schwäche nicht an."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279681
	}
}

export default card
