import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu",
		'de-de': "Pachirisu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		417,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Minor Errand-Running",
				'fr-fr': "Rendez-vous mineur",
				'de-de': "Kleine Besorgung"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Jolt",
				'fr-fr': "Secousse tonnerre",
				'de-de': "Donnerrüttler"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Pachirisu does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Pachirisu s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Müntze. Bei \"Zahl\" fügt sich Pachirisu selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It makes fur balls that crackle with static electricity. It stores them with berries in tree holes.",
		'fr-fr': "Il roule des boules de poils pleines d'électricité statique et les range dans des souches avec des Baies."
	},

	thirdParty: {
		cardmarket: 277534,
		tcgplayer: 87897
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
