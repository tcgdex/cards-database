import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Tyranitar",
	},

	illustrator: "Satoshi Shirai",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 160,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pupitar",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Raging Roar",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may attach 1 Darkness Energy from your discard pile to this Pokémon for each Prize card your opponent has taken.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Mountain",
			},
			effect: {
				en: "Discard the top 2 cards of your deck. This attack does 50 more damage for each Supporter card discarded in this way.",
			},
			damage: "150+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 290103
	}
}

export default card
