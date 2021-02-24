import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Unown I",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
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
				en: "ITEM",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown I, Unown T, Unown E, and Unown M on your Bench, you may search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. You can't use more than 1 ITEM Poké-Power each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
			},
			effect: {
				en: "Choose an Energy card attached to the Defending Pokémon and put it face down. Treat that card as a Special Energy card that provides Colorless Energy and doesn't have any effect other than providing Energy. Put that card face up at the end of your opponent's next turn.",
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
