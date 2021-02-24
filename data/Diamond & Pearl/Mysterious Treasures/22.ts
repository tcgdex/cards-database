import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Chimecho",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		358,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call In",
			},
			effect: {
				en: "Draw a card. If Chingling is anywhere under Chimecho, draw 2 more cards.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Strange Bell",
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
			},
			damage: 20,

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
