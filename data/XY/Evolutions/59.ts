import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Counterattack",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],

			name: {
				en: "Seismic Toss",
			},

			damage: 120,
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Frappe Atlas",
			},

			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
