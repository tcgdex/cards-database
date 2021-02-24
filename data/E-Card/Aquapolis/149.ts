import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Lugia",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 80,
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
				en: "Whenever you attach a Fire, Water, or Psychic basic Energy card from your hand to Lugia, Lugia's type (color) becomes the same as that as that Energy card type until the end of the turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Fire",
			],
			name: {
				en: "Psychic",
			},
			effect: {
				en: "This attack does 10 damage times the number of Energy cards attached to the Defending Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Steam Blast",
			},
			effect: {
				en: "Discard an Energy card attached to Lugia.",
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
