import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Mew",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Type Change",
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. Mew is the same type as that Pokémon (all if that Pokémon is more than 1 type) until the end of your turn. This power can't be used if Mew is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Link Blast",
			},
			effect: {
				en: "If Mew and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 20 instead of 50.",
			},
			damage: 50,

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
