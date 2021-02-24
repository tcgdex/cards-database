import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Blastoise",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Rain Dance",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach 1 Water Energy Card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Pump",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each attached Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
			},
			damage: "40+",

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
