import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Gengar",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Curse",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dark Mind",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274776,
		tcgplayer: 85670
	},

	variants: [
		{
			type: "reverse"
		},
		{
			type: "holo"
		}
	]
}

export default card
