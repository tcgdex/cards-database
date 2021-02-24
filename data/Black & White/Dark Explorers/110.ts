import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Archeops",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		567,
	],
	hp: 130,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Archen",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ancient Power",
			},
			effect: {
				en: "Each player can't play any Pokémon from his or her hand to evolve his or her Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
