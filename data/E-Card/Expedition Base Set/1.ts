import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Alakazam",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Kadabra",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psymimic",
			},
			effect: {
				en: "Once during your turn, instead of Alakazam's normal attack, you may choose 1 of your opponent's Pokémon's attack. Alakazam copies that attack including its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type that Pokémon is, Alakazam's type is still Psychic.) This power can't be used if Alakazam is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Syncroblast",
			},
			effect: {
				en: "If Alakazam and the Defending Pokémon don't have the same number of Energy cards on them, this attack's base damage is 20 instead of 80.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
