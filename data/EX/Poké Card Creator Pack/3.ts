import { Card } from '../../../interfaces'
import Set from '../Poké Card Creator Pack'

const card: Card = {
	name: {
		en: "Torchic"
	},

	illustrator: "May Do",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Super Singe"
			},
			effect: {
				en: "The Defending Pokémon is now Burned."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Torchic."
			},
			damage: 40,

		}
	],

	weaknesses: [
		{
			type: "Water"
		},
	],

	thirdParty: {
		cardmarket: 605994
	},

	variants: [
		{
			type: "normal"
		}
	]
}

export default card
