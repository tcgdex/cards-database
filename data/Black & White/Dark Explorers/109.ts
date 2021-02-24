import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Gardevoir",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Psychic Mirage",
			},
			effect: {
				en: "Each basic Psychic Energy attached to your Psychic Pokémon provides PsychicPsychic Energy. You can't apply more than 1 Psychic Mirage Ability at a time.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Shock",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
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
