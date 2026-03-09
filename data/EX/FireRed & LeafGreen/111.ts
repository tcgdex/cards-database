import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Mr. Mime ex",
		fr: "M. Mime ex",
		de: "Pantimos ex"
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
				en: "Magic Evens",
				fr: "Pair magique",
				de: "Magic Evens"
			},
			effect: {
				en: "If Mr. Mime ex would be damaged by an attack, prevent that attack's damage done to Mr. Mime ex if that damage is 20, 40, 60, 80, 100, 120, 140, 160, or 180.",
				fr: "Si une attaque inflige des dégâts à M. Mime ex, prévenez-les si les dégâts sont de 20, 40, 60, 80, 100, 120, 140, 160 ou 180.",
				de: "If Mr. Mime ex would be damaged by an attack, prevent that attack's damage done to Mr. Mime ex if that damage is 20, 40, 60, 80, 100, 120, 140, 160, or 180."
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
				fr: "Réaction",
				de: "Breakdown"
			},
			effect: {
				en: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
				fr: "Comptez le nombre de cartes dans la main de votre adversaire. Placez sur le Pokémon Défenseur autant de marqueurs de dégât qu'il y a de cartes.",
				de: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon."
			},

		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276286,
		tcgplayer: 87599
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
