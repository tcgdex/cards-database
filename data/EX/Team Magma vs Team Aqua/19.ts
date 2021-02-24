import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Camerupt",
	},
	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Overheat",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a basic Energy card and attach it to Team Magma's Camerupt. Put 2 damage counters on Team Mamga's Camerupt. This power can't be used if Team Magma's Camerupt is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Ball",
			},
			effect: {
				en: "You may move a Fire Energy card attached to Team Magma's Camerupt to 1 of your Benched Pokémon.",
			},
			damage: 50,

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
