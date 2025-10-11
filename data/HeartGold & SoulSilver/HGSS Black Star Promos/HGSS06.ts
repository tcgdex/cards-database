import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Noctowl",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		164,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Hoothoot",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Night Scope",
			},
			effect: {
				en: "Once during your turn (before you attack), you may look at your opponent's hand. This Power can't be used if Noctowl is affected by a Special Condition.",
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
				en: "Hypnoblast",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
