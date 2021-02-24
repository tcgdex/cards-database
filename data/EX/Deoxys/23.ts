import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Sableye",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Night Vision",
			},
			effect: {
				en: "Once during your turn (before your attack), if Sableye is your Active Pokémon, you may look at your opponent's hand. This power can't be used if Sableye is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Limitation",
			},
			effect: {
				en: "Your opponent can't play any Supporter cards from his or her hand during your opponent's next turn.",
			},

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-30"
		},
	],




}

export default card
