import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'de-de': "Voltobal"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'fr-fr': "Voltorbe",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Outlet",
				'fr-fr': "Exutoire",
				'de-de': "Stromquelle"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Énergie Lightning, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer -Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Bouncing Ball",
				'fr-fr': "Balle rebondissante",
				'de-de': "Hüpfender Ball"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Voltorb does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Voltorbe s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich Voltobal selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
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
		'en-us': "It looks just like a Poké Ball. It is dangerous because it may electrocute or explode on touch.",
		'fr-fr': "Il ressemble à une Poké Ball. Ce Pokémon dangereux peut exploser ou s'électrifier au toucher."
	},

	thirdParty: {
		cardmarket: 278296,
		tcgplayer: 90420
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
