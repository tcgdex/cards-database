import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Unown E",
	},
	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
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
				en: "EQUIP",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown E is on your Bench, you may discard all cards attached to Unown E and attach Unown E to 1 of your Pokémon as a Pokémon Tool card. As long as Unown E is attached to a Pokémon, that Pokémon gets +10 HP.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hidden Power",
			},
			effect: {
				en: "During your opponent's next turn, whenever your opponent flips a coin, treat it as tails.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],





}

export default card
