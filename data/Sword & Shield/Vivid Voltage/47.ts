import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Thunderous Awakening",
				fr: "Éveil Fulgurant"
			},
			effect: {
				en: "If this Pokémon has a Memory Capsule attached, Water Pokémon in play (both yours and your opponent’s) have no Abilities.",
				fr: "Si une carte Capsule Mémoire est attachée à ce Pokémon, les Pokémon Water en jeu (les vôtres et ceux de votre adversaire) n’ont pas de talent."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
