import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
	},
	illustrator: "sui",
	rarity: "Uncommon",
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
				en: "Bide Barricade",
				fr: "Épreuve d’Endurance",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, each Pokémon in play, in each player’s hand, and in each player’s discard pile has no Abilities (except for Psychic Pokémon).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n’a pas de talent (à part les Pokémon Psychic).",
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
				en: "Psychic Assault",
				fr: "Assaut Psychique",
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
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



}

export default card
