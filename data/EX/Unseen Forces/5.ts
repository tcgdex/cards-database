import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Flareon",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Dance",
			},
			effect: {
				en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Multi Burn",
			},
			effect: {
				en: "If Flareon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
