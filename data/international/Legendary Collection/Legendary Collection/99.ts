import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Weedle"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [13],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Sting"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Often found in forests, eating leaves. It has a sharp, venomous stinger on its head."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274864,
				tcgplayer: 90539
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90539,
				cardmarket: 274864
			}
		}
	],

}

export default card
