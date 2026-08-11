import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Baltoy",
		'fr-fr': "Balbuto de Team Magma",
		'de-de': "Team Magmas Puppance"
	},

	illustrator: "Atsuko Ujiie",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [343],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Psymist",
				'fr-fr': "Brume psy",
				'de-de': "Psymist"
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, choose 1 of you opponent's Pokémon and put 1 damage counter on that Pokémon.",
				'fr-fr': "Lancez 2 pièces. Pour chaque face, choisissez 1 des Pokémon de votre adversaire et placez 1 marqueur de dégât sur ce Pokémon.",
				'de-de': "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and put 1 damage counter on that Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Pain Amplifier",
				'fr-fr': "Amplificateur de douleur",
				'de-de': "Pain Amplifier"
			},
			effect: {
				'en-us': "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it.",
				'fr-fr': "Placez 1 marqueur de dégât sur chaque Pokémon de votre adversaire qui possède déjà des marqueurs de dégât.",
				'de-de': "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it."
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275809,
				tcgplayer: 89821
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275809,
				tcgplayer: 89821
			}
		},
	],

}

export default card
