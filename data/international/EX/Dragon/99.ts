import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'de-de': "Glutexo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [5],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Smokescreen",
				'fr-fr': "Brouillard",
				'de-de': "Smokescreen"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est face, cette attaque est sans effet.",
				'de-de': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flip a coin. if tails, that attack does nothing."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fireworks",
				'fr-fr': "Feux d'artifices",
				'de-de': "Fireworks"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy card attached to Charmeleon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une carte Énergie  attachée à Reptincel.",
				'de-de': "Flip a coin. If tails, discard a  Energy card attached to Charmeleon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84225,
				cardmarket: 275976
			},
		},
		{
			type: "holo",
			stamp: ["state-championships"],
			thirdParty: {
				tcgplayer: 285694,
				cardmarket: 275976
			},
		},
	],

}

export default card
