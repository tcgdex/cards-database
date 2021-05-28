import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon",
	},
	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		352,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unit Color 3",
				fr: "Couleur Unitaire 3",
			},
			effect: {
				en: "As long as this Pokémon has Unit Energy FightingDarknessFairy attached to it, it is a Fighting, Darkness, and Fairy Pokémon.",
				fr: "Tant que de l’Énergie Unitaire FightingDarknessFairy est attachée à ce Pokémon, c’est un Pokémon Fighting, Darkness et Fairy.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle Douce",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
