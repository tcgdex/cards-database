import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Magneton",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magnemite",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Field",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have basic Energy cards in your discard pile, you may discard any 1 card from your hand. Then search for up to 2 basic Energy cards from your discard pile, show them to your opponent, and put them into your hand. You can't return the card you first discarded to your hand in this way. This power can't be used if Magneton is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Magnetic Force",
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to all of your Pokémon (including Magneton).",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
