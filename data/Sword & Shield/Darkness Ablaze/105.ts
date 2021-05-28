import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Darkrai",
		fr: "Darkrai"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Darkness Guard",
				fr: "Parade Obscure"
			},
			effect: {
				en: "If this Pokémon has any Darkness Energy attached, it takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Si de l’Énergie Darkness est attachée à ce Pokémon, il subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vortex of Darkness",
				fr: "Vortex Obscur"
			},
			effect: {
				en: "This attack does 20 more damage for each Darkness Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Darkness attachée à ce Pokémon."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
