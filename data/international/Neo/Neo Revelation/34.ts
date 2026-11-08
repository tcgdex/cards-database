import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'de-de': "Octillery"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Constrict",
				'fr-fr': "Constriction",
				'de-de': "Umklammerung"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Octazooka",
				'fr-fr': "Octazooka",
				'de-de': "Octazooka"
			},
			effect: {
				'en-us': "Flip a coin. If heads, whenever the Defending Pokémon attacks, your opponent flips a coin. If tails that attack does nothing. (Benching or evolving that Pokémon ends this effect.)",
				'fr-fr': "Lancez une pièce. Si c'est face, lorsque le Pokémon Défenseur attaque, votre adversaire doit lancer une pièce. Si c'est pile, cette attaque ne fait rien. (Envoyer le Pokémon Défenseur sur son Banc ou le faire évoluer met fin à cet effet.)",
				'de-de': "Wirf eine Münze. Bei 'Kopf' wirft dein Gegner immer, wenn das verteidigende Pokémon angreift, eine Münze. Bei 'Zahl' hat dessen Angriff dann keine Auswirkungen. (Wenn jenes Pokémon auf die Bank kommt, oder sich entwickelt, endet dadurch dieser Effekt.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It traps enemies with its suction cupped tentacles then smashes them with its rockhard head.",
		'fr-fr': "Il attrape ses ennemis avec les ventouses de ses tentacules et les écrase d'un coup de sa tête dure."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274620,
				tcgplayer: 87830
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274620,
				tcgplayer: 87830
			}
		}
	]
}

export default card

