import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum"
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		93,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gastly",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Time Spiral",
				fr: "Spirale temporelle"
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, choose 1 of them and flip a coin. If heads, remove the highest Stage Evolution card on that Pokémon and have your opponent shuffled it into his or her deck.",
				fr: "Si votre adversaire a des Pokémon Évolués en jeu, choisissez-en 1 et lancez une pièce. Si c'est face, retirez à ce Pokémon sa carte Évolution au niveau le plus élevé et demandez à votre adversaire de la mélanger à son deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Haunt",
				fr: "Hanter"
			},
			effect: {
				en: "Put 2 damage counters on the Defending Pokémon.",
				fr: "Placez 2 marqueurs de dégât sur le Pokémon Défenseur."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
