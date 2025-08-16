import { Card } from '../../../interfaces'
import Set from '../Poké Card Creator Pack'

const card: Card = {
	name: {
		en: "Treecko"
	},

	illustrator: "Mark Kraus",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		252,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle"
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Claws"
			},
			effect: {
				en: 'The Defending Pokémon is now Poisoned. '
			},
			damage: 30,

		}
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 605992
	}
}

export default card
