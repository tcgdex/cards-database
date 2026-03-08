import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Hariyama",
		fr: "Hariyama",
		de: "Hariyama"
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
		fr: "Makuhita"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Super Slap Push",
				fr: "Super gifle",
				de: "Super Slap Push"
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
				fr: "Inflige 20 dégâts à chaque Pokémon Défenseur.",
				de: "Does 20 damage to each Defending Pokémon."
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
				fr: "Mega lancer",
				de: "Mega Throw"
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon-ex, this attack does 40 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque lui inflige 80 dégâts.",
				de: "If the Defending Pokémon is a Pokémon-ex, this attack does 40 damage plus 40 more damage."
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


	retreat: 2,

	thirdParty: {
		cardmarket: 275656,
		tcgplayer: 86010
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
