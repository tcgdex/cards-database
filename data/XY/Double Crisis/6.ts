import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Kyogre EX",
		fr: "Kyogre-EX de la Team Aqua",
	},
	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 190,
	types: [
		"Water",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Saver",
				fr: "Économie de Puissance",
			},
			effect: {
				en: "If there are 4 or fewer Team Aqua Pokémon in play, this Pokémon can't attack.",
				fr: "S'il y a 4 Pokémon de la Team Aqua en jeu ou moins, ce Pokémon ne peut pas attaquer.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Impact",
				fr: "Impact Aqua",
			},
			effect: {
				en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			},
			damage: "80＋",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
