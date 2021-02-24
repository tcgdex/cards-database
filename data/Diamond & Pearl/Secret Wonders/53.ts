import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		281,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Research",
				fr: "Recherche psy",
			},
			effect: {
				en: "Search your discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your discard pile.)",
				fr: "Choisissez dans votre pile de défausse une carte Supporter et utilisez l'effet de cette carte comme l'effet de cette attaque. (La carte Supporter reste dans la pile de défausse.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Telekinesis",
				fr: "Télékinésie",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
