import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Espeon",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Return",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may return an Energy card attached to 1 of your Pokémon to your hand. This power can't be used if Espeon is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Damage Blast",
			},
			effect: {
				en: "Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 30 damage plus 10 more damage for each heads.",
			},
			damage: 30,

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
