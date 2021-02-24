import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Mesprit",
		fr: "Créfollet",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		481,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",


	attacks: [
		{

			name: {
				en: "Healing Look",
				fr: "Regard guérisseur",
			},
			effect: {
				en: "Remove 3 damage counters from each of your Benched Pokémon.",
				fr: "Retirez à chacun de vos Pokémon de Banc 3 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Supreme Blast",
				fr: "Explosion suprême",
			},
			effect: {
				en: "If you don't have Uxie LV.X and Azelf LV.X in play, this attack does nothing. Discard all Energy attached to Mesprit.",
				fr: "Si vous n'avez pas de Créhelf NIV.X et Créfadet NIV.X en jeu, cette attaque est sans effet. Défaussez toutes les Énergies attachées à Créfollet.",
			},
			damage: 200,

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
