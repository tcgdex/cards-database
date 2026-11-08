import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse",
		'de-de': "Hundemon"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [229],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smokescreen",
				'fr-fr': "Brouillard",
				'de-de': "Rauchwolke"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire lance une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wenn das Verteidigende Pokémon versucht, während des nächsten Zuges deines Gegners anzugreifen, wirft dein Gegner eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Burn Up",
				'fr-fr': "Brûlure",
				'de-de': "Wegbrennen"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard all Fire Energy cards attached to Houndoom.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez-vous de toutes les cartes Énergie  attachée à Démolosse.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" lege alle an Hundemon angelegten -Energiekarten auf deinen Ablagestapel."
			},
			damage: 60,

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
			type: 'normal',
			thirdParty: {
				tcgplayer: 86202,
				cardmarket: 275050
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86202,
				cardmarket: 275050
			}
		},
	]
}

export default card
