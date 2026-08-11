import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Tentacruel",
		'fr-fr': "Tentacruel",
		'de-de': "Tentoxa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' isdt das verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Jellyfish Sting",
				'fr-fr': "Dard-méduse",
				'de-de': "Quallenstich"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das verteidgende Pokémon jetzt jetzt vergiftet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		'en-us': "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.",
		'fr-fr': "Ses tentacules sont rétractés au repos. En situation de chasse, ils s'allongent."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273905,
				tcgplayer: 44446
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273905,
				tcgplayer: 44446
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
