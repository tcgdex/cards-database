import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Celebi",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
			},
			effect: {
				en: "Whenever you attach a Grass, Water, or Psychic basic Energy card from your hand to Celebi, Celebi's type (color) becomes the same as that type of energy until the end of the turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Water",
			],
			name: {
				en: "Empathetic Healing",
			},
			effect: {
				en: "Remove 2 damage counters from Celebi and each Pokémon that's the same type (color) as Celebi.",
			},

		},
		{
			cost: [
				"Grass",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mind Bend",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
