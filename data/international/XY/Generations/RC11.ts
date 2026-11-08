import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoké",
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bide Barricade",
				'fr-fr': "Épreuve d'Endurance",
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Psychic Pokémon).",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent (à part les Pokémon Psychic).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Assault",
				'fr-fr': "Assaut Psychique",
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When she's surrounded by cushions and dressers that I like, she looks just like a princess!",
	},

	thirdParty: {
		cardmarket: 288520
	}
}

export default card
