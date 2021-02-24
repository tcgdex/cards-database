import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Dialga",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 90,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Time Bellow",
			},
			effect: {
				en: "Draw a card.",
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Flash Cannon",
			},
			effect: {
				en: "You may return all Energy cards attached to Dialga to your hand. If you do, remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
