import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Staryu",
		fr: "Sterndu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Star Boomerang",
				fr: "Star-boomerang",
			},
			effect: {
				en: "You may return Starmie and all cards attached to it to your hand.",
				fr: "Vous pouvez reprendre dans votre main Staross ainsi que toutes les cartes qui lui sont attachées.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Core Flash",
				fr: "Flash-coeur",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any Poké-Powers or Poké-Bodies. This attack does 50 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire possédant des Poké-Powers ou des Poké-Bodies. Cette attaque lui inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	description: {
		fr: "Un noyau rouge trône en son centre. Il envoie des signaux radio mystérieux vers le ciel nocturne."
	}
}

export default card
