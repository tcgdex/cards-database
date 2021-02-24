import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Machamp",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machoke",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Derail",
			},
			effect: {
				en: "Discard a Special Energy card, if any, attached to the Defending Pokémon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift Blow",
			},
			effect: {
				en: "Does 60 damage plus 20 damage for each React Energy card attached to Machamp.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
