import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Feraligatr",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Major Tsunami",
			},
			effect: {
				en: "Once during your turn (before you attack), if Feraligatr is your Active Pokémon and if your opponent has any Benched Pokémon, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon. Either way, if you have any Benched Pokémon, switch Feraligatr with 1 of them. This power can't be used if Feraligatr is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rending Jaws",
			},
			effect: {
				en: "If there are no damage counters on the Defending Pokémon, this attack's base damage is 40 instead of 70.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
