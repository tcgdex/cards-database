import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Mr. Mime ex",
		fr: "M. Mime ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 80,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Magic Odds",
				fr: "Impair magique"
			},
			effect: {
				en: "If Mr. Mime ex would be damaged by an attack, prevent that attack's damage done to Mr. Mime ex if that damage is 10, 30, 50, 70, 90, 110, 130, 150, or 170.",
				fr: "Si une attaque inflige des dégâts à M. Mime ex, prévenez-les si les dégâts sont de 10, 30, 50, 70, 90, 110, 130, 150 ou 170."
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
				en: "Breakdown",
				fr: "Réaction"
			},
			effect: {
				en: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
				fr: "Comptez le nombre de cartes dans la main de votre adversaire. Placez sur le Pokémon Défenseur autant de marqueurs de dégât qu'il y a de cartes."
			},

		},
	],






}

export default card
