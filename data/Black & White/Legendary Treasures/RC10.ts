import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Gardevoir",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Kirlia",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psybeam",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Eternal Radiance",
			},
			effect: {
				en: "Move all damage counters from this Pokémon to the Defending Pokémon. This Pokémon can't use Eternal Radiance during your next turn.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 281135
	}
}

export default card
