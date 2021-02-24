import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Lanturn",
	},
	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Auxiliary Light",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to Team Aqua's Lanturn. Put 2 damage counters on Team Aqua's Lanturn. This power can't be used if Team Aqua's Lanturn is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Ball",
			},

			damage: 50,

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
