import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Unown T",
	},
	illustrator: "Kazuyuki Kano",
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
				en: "THROW",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown T is your Active Pokémon, you may discard a card from your hand. Then, flip a coin. If heads, put 2 damage counters on 1 of your opponent's Benched Pokémon. This power can't be used if Unown T is affected by a Special Condition.",
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
				en: "Look at your opponent's hand and choose 1 card, then have your opponent shuffle that card into his or her deck. Then, show your opponent your hand and he or she chooses 1 card. Shuffle that card into your deck.",
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
