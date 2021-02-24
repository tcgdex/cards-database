import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Blastoise",
	},
	illustrator: "Kimiya Masago",
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
				en: "Jet Stream",
			},
			effect: {
				en: "Once during your turn (before you attack), if Blastoise is your Active Pokémon, you may flip a coin. If heads, discard an Energy card attached to Blastoise, if any. Then, if there are any Energy cards attached to the Defending Pokémon, choose one of them and discard it. This power can't be used if Blastoise is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Energy Cannon",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			},
			damage: 40,

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
