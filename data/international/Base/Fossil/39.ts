import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Magby",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Smokescreen",
				'fr-fr': "Brouillard",
				'de-de': "Rauchwolke"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire doit lancer une pièce. Si c'est pile, cette attaque n'a aucun effet.",
				'de-de': "Falls das verteidigende Pokémon während des nächsten gegnerischen Zuges anzugreifen veruscht, wirft dein gegner eine Münze. Bei 'Zahl' fügt dieser Angriff keine Schadenspunkte zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],

			name: {
				'en-us': "Smog",
				'fr-fr': "Purédpois",
				'de-de': "Smog"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Found at the mouths of volcanoes and extremely hard to spot. There are very few instances of capturing this Pokémon.",
		'fr-fr': "On le trouve dans le coeur des volcans où il est très difficile à repérer. On compte très peu de captures de ce Pokémon."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273900,
				tcgplayer: 44441
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273900,
				tcgplayer: 44441
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
