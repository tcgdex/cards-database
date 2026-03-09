import { Card } from '../../../interfaces'
import Set from '../Poké Card Creator Pack'

const card: Card = {
	name: {
		en: "Pikachu"
	},

	illustrator: "Sylvia Forrest",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thundershock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Hypno Splash"
			},
			effect: {
				en: "Discard all Lightning Energy cards attached to Pikachu or this attack does nothing."
			},
			damage: 60,

		}
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],

	thirdParty: {
		cardmarket: 605996
	},

	variants: [
		{
			type: "normal"
		}
	]
}

export default card
