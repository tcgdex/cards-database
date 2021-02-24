import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Wynaut",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		360,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Wobbuffet from your hand onto Wynaut (this counts as evolving Wynaut) and remove all damage counters from Wynaut.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Wynaut.",
			},
			damage: 10,

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
