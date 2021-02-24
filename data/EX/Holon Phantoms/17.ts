import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Vileplume δ",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 90,
	types: [
		"Psychic",
		"Metal",
	],
	evolveFrom: {
		en: "Gloom",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Poison Pollen",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				en: "Poltergeist",
			},
			effect: {
				en: "Look at your opponent's hand. This attack does 30 damage plus 10 more damage for each Trainer card in your opponent's hand.",
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
