import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Smoochum",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		238,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Jynx from your hand onto Smoochum (this counts as evolving Smoochum) and remove all damage counters from Smoochum.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Blown Kiss",
			},
			effect: {
				en: "Put 1 damage counter on 1 of your opponent's Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
