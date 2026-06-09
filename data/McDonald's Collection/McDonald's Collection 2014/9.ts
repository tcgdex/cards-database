import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2014'

const card: Card = {
	dexId: [
		684,
	],
	illustrator: "5ban Graphics",
	description: {
		en: "To entangle its opponents in battle, it extrudes white threads as sweet and sticky as cotton candy."
	},
	set: Set,
	name: {
		en: "Swirlix",
		fr: "Sucroquin",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fairy",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Draining Kiss",
				fr: "Vampibaiser",
			},
			damage: "10",
			effect: {
				en: "Heal 10 damage from this Pokémon."
			}
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281661,
				tcgplayer: 110414
			}
		}
	]
}

export default card

