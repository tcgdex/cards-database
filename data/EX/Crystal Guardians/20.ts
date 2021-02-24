import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Grumpig",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		326,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Spoink",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Fat",
			},
			effect: {
				en: "Any damage done to Grumpig by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Circular Steps",
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's), excluding Grumpig.",
			},
			damage: 10,

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
