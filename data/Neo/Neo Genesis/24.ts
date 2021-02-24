import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Murkrow",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		198,
	],
	hp: 50,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Mean Look",
			},
			effect: {
				en: "The Defending Pokémon can't retreat as long as Murkrow remains your Active Pokémon. (Benching or evolving either Pokémon ends this effect.)",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
