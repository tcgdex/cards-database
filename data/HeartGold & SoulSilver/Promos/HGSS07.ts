import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Feraligatr",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Rain Dance",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Water Pokémon. This power can't be used if Feraligatr is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Crunch",
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
