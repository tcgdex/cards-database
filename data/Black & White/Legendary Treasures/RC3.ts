import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Serperior",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		497,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Servine",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Royal Garden",
			},
			effect: {
				en: "If this Pokémon has any Grass Energy attached to it, this Pokémon has no Retreat Cost.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
	},

	thirdParty: {
		cardmarket: 281151
	}
}

export default card
