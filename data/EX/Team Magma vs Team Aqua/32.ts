import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Baltoy",
		fr: "Balbuto de Team Magma",
		de: "Team Magmas Puppance"
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
				fr: "Brume psy",
				de: "Psymist"
			},
			effect: {
				en: "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and put 1 damage counter on that Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque face, choisissez 1 des Pokémon de votre adversaire et placez 1 marqueur de dégât sur ce Pokémon.",
				de: "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and put 1 damage counter on that Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Pain Amplifier",
				fr: "Amplificateur de douleur",
				de: "Pain Amplifier"
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it.",
				fr: "Placez 1 marqueur de dégât sur chaque Pokémon de votre adversaire qui possède déjà des marqueurs de dégât.",
				de: "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276009,
		tcgplayer: 89821
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
