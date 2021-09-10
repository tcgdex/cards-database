import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Dialga-EX",
		fr: "Dialga EX",
		es: "Dialga-EX",
		it: "Dialga-EX",
		pt: "Dialga-EX",
		de: "Dialga-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Reverse Edge",
				fr: "Revers-Lame",
			},
			effect: {
				en: "Flip a coin. If heads, put a card from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c'est face, ajoutez une carte de votre pile de défausse à votre main.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fast Forward",
				fr: "Avance Rapide",
			},
			effect: {
				en: "For each Plasma Energy attached to this Pokémon, discard the top card of your opponent's deck.",
				fr: "Pour chaque Énergie Plasma attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
