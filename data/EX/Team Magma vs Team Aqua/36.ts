import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Lairon",
		fr: "Galegon de Team Magma",
		de: "Team Magmas Stollrak"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				de: "Gnaw"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Land Sonic",
				fr: "Terre sonique",
				de: "Land Sonic"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Confus.",
				de: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275997,
		tcgplayer: 89834
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
