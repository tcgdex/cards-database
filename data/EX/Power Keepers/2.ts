import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Swablu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synergy Effect",
				fr: "Effet synergie"
			},
			effect: {
				en: "If Drake's Stadium is in play, remove 1 damage counter from Altaria between turns.",
				fr: "Si Stade d'Aragon est en jeu, retirez à Altaria un marqueur de dégât entre deux tours."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Surprise",
				fr: "Surprise"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Choisissez sans regarder une carte de la main de votre adversaire. Regardez cette carte puis demandez à votre adversaire de la mélanger à son deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
