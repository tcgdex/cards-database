import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Scyther",
		'fr-fr': "Insecateur",
		'de-de': "Sichlor"
	},

	illustrator: "Wataru Kawahara/Direc. Shinji Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [123],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Afterimage Strike",
				'fr-fr': "Frap’Invisible",
				'de-de': "Nachbild-Angriff"
			},
			effect: {
				'en-us': "During your opponent's next turn, if Scyther would be damaged by an attack, flip a coin. If heads, prevent that attack's damage done to Scyther.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si Insécateur doit subir les dégâts d’une attaque, lancez une pièce. Si c’est face, Insécateur ne subit pas les",
				'de-de': "Wenn Sichlor während des nächsten Zuges deines Gegners durch einen Angriff Schaden zugefügt würde, wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff Sichlor keinen Schaden zu."
			},
			damage: 20,

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
		'en-us': "When it moves, it leaves only a blur. If it hides in grass, its protective colors make it invisible."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279289,
				tcgplayer: 89003
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279289,
				tcgplayer: 89003
			}
		}
	],

}

export default card
