import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Loudred",
		fr: "Ramboum"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		294,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Whismur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surprise",
				fr: "Surprise"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la et demandez à votre adversaire de la mélanger à son deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bass Control",
				fr: "Super basse"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
