import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Sableye",
	},
	illustrator: "Yukiko Baba",
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
				en: "Excavate",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the card on top of your deck. Put that card on top of your deck, or discard that card. This power can't be used if Sableye is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Disable",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			},
			damage: 10,

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
