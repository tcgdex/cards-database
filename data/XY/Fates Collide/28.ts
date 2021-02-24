import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Balloon Bomb",
				fr: "Bombe Ballon",
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard 2 cards from the top of your opponent's deck.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez 2 cartes du dessus du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thick Liquid",
				fr: "Liquide Épais",
			},
			effect: {
				en: "Both Active Pokémon are now Confused and Poisoned.",
				fr: "Les deux Pokémon Actifs sont maintenant Confus et Empoisonnés.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
