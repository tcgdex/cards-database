import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sand-attack",
				'fr-fr': "Jet de sable",
				'de-de': "Sand-attack"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire lance une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flip a coin. if tails, that attack does nothing."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A rare and unique Pokémon about which little is known, as few have been captured.",
		'fr-fr': "On ne sait pas grand chose sur ce Pokémon rare et unique, car très peu ont été capturés."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274108,
				tcgplayer: 85078
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274108,
				tcgplayer: 85078
			}
		}
	]
}

export default card
