import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
		'de-de': "Ultrigaria"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		70,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bellsprout",
		'fr-fr': "Chétiflor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre toxik",
				'de-de': "Giftpuder"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 10
		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Rasierblatt"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It spits out poisonpowder to immobilize the enemy, and then finishes the enemy with a spray of acid.",
		'fr-fr': "Il crache de la poudre toxik pour immobiliser sa proie et il l'achève avec de l'acide."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273845,
				tcgplayer: 45151
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273845,
				tcgplayer: 45151
			}
		}
	],
}

export default card
