import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
	},
	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		93,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sneaky Placement",
				fr: "Placement vicieux",
			},
			effect: {
				en: "Put 2 damage counters on 1 of your opponent's Pokémon.",
				fr: "Placez 2 marqueurs de dégât sur l'un des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleep Poison",
				fr: "Poison dodo",
			},
			effect: {
				en: "The Defending Pok��mon is now Asleep and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card
