import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Hariyama",
		fr: "Hariyama"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		297,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Makuhita",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Super Slap Push",
				fr: "Super gifle"
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
				fr: "Inflige 20 dégâts à chaque Pokémon Défenseur."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Throw",
				fr: "Mega lancer"
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon-ex, this attack does 40 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque lui inflige 80 dégâts."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
