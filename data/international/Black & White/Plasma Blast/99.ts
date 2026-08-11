import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Dialga-EX",
		'fr-fr': "Dialga EX",
		'es-es': "Dialga-EX",
		'it-it': "Dialga-EX",
		'pt-br': "Dialga-EX",
		'de-de': "Dialga-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				'en-us': "Reverse Edge",
				'fr-fr': "Revers-Lame",
			},
			effect: {
				'en-us': "Flip a coin. If heads, put a card from your discard pile into your hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, ajoutez une carte de votre pile de défausse à votre main.",
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
				'en-us': "Fast Forward",
				'fr-fr': "Avance Rapide",
			},
			effect: {
				'en-us': "For each Plasma Energy attached to this Pokémon, discard the top card of your opponent's deck.",
				'fr-fr': "Pour chaque Énergie Plasma attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
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
