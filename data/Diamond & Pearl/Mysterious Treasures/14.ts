import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Mesprit",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		481,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Upper Material",
			},
			effect: {
				en: "If you have Uxie and Azelf in play, the Retreat Cost for each Uxie, Mesprit, and Azelf (both yours and your opponent's) is 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Teleportation Burst",
			},
			effect: {
				en: "You may switch Mesprit with 1 of your Benched Pokémon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],





}

export default card
