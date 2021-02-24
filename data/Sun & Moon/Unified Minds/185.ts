import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Komala",
		fr: "Dodoala",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		775,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Drowsing",
				fr: "Rêveur",
			},
			effect: {
				en: "If this Pokémon remains Asleep between turns, put 6 damage counters on your opponent's Active Pokémon.",
				fr: "Si ce Pokémon reste Endormi entre deux tours, placez 6 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Snooze",
				fr: "Roupillon",
			},
			effect: {
				en: "This Pokémon is now Asleep.",
				fr: "Ce Pokémon est maintenant Endormi.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
