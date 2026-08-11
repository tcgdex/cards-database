import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
	name: {
		en: "Ancient Mew",
	},
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [151],
	hp: 30,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psyche",
			},
			damage: "40",
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				tcgplayer: 108589
			},
		},
	],

	description: {
		en: "New Species. Little God or Evil?"
	},
}

export default card
