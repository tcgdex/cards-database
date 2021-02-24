import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Gengar",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Haunter",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Curse",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another of your opponent's Pokémon. This power can't be used if Gengar is affected by a Special Condition.",
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
				en: "Shadow Skip",
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) You may switch Gengar with 1 of your Benched Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card
