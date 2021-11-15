import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Baltoy",
		fr: "Balbuto de Team Magma"
	},
	illustrator: "Atsuko Ujiie",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		343,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psymist",
				fr: "Brume psy"
			},
			effect: {
				en: "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and put 1 damage counter on that Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque face, choisissez 1 des Pokémon de votre adversaire et placez 1 marqueur de dégât sur ce Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Pain Amplifier",
				fr: "Amplificateur de douleur"
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it.",
				fr: "Placez 1 marqueur de dégât sur chaque Pokémon de votre adversaire qui possède déjà des marqueurs de dégât."
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
