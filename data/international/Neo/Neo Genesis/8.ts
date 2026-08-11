import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Kingdra",
		'fr-fr': "Hyporoi",
		'de-de': "Seedraking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agilität"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Kingdra.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Hyporoi.",
				'de-de': "Wirf eine Münze. Verhindere bei 'Kopf' während des nächsten Zuges deines Gegners alle Auswirkungen von Angriffen auf Seedraking (einschließlich der Schadenspunkte)."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Dragon Tornado",
				'fr-fr': "Tornade du dragon",
				'de-de': "Drachen-Tornado"
			},
			effect: {
				'en-us': "If this attack doesn't Knock Out the Defending Pokémon, and if there are any Pokémon on your opponent's Bench, choose 1 of them and switch it with the Defending Pokémon.",
				'fr-fr': "Si cette attaque ne met pas K.O. le Pokémon Défenseur, et s'il y a des Pokémon sur le Banc de votre adversaire, choisissez l'un d'eux et échangez-le avec le Pokémon Défenseur",
				'de-de': "Falls dieser Angriff das verteidigende Pokémon nicht kampfunfähig macht, und falls dein Gegner mindestens ein Pokémon auf der Bank hat, wähle eines von diesen und tausche es mit dem verteidigenden Pokémon aus."
			},
			damage: 50,

		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said that it usually hides in underwater caves. It can create whirlpools by yawning.",
		'fr-fr': "On prétend qu'il se cache dans des grottes sous-marines. Il peut créer des tourbillons rien que par son bâillement."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274408,
				tcgplayer: 86440
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274408,
				tcgplayer: 86440
			}
		}
	]
}

export default card
