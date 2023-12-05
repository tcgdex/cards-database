import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Alakazam",
		de: "Simsala"
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Kadabra",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Jump",
				de: "Energy Jump"
			},
			effect: {
				en: "Once during your turn (before you attack) you may move an energy card from 1 of your Pokémon to another of your Pokémon. This power can't be used if Alakazam is affected by a Special Condition.",
				de: "Once during your turn (before your attack), you may move an Energy card from 1 of your Pokémon to another of your Pokémon. This power can't be used if Alakazam is affected by a Special Condition."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				de: "Psychic"
			},
			effect: {
				en: "This attack does 30 damage plus 10 more damage for each energy card attached to the Defending Pokémon.",
				de: "This attack does 30 damage plus 10 more damage for each Energy card attached to the Defending Pokémon."
			},
			damage: "30+",

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
