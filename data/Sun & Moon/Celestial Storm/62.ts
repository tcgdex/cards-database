import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		338,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sunbeam",
				fr: "Rayon de Soleil",
			},
			effect: {
				en: "The maximum HP of each of your Lunatone in play is 130.",
				fr: "Les PV maximum de chacun de vos Séléroc en jeu sont de 130.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scorching Light",
				fr: "Lumière Aveuglante",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed. If tails, your opponent's Active Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
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



}

export default card
