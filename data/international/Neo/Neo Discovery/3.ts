import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Hitmontop",
		'fr-fr': "Kapoera",
		'de-de': "Kapoera"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Detect",
				'fr-fr': "Détection",
				'de-de': "Scanner"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Hitmontop.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, tous les effets des attaques contre Kapoera, y compris les dégâts, sont annulés.",
				'de-de': "Wirf eine Münze. Verhindere bei \"Kopf\" während des nächsten gegenerischen Zugs alle Aus-wirkungen von Angriffen auf kapoera (einschließlich der Schadenspunkte)."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],

			name: {
				'en-us': "Triple Kick",
				'fr-fr': "Triple pied",
				'de-de': "Dreifachkick"
			},

			effect: {
				'en-us': "Flip 3 coins. This attack does 30 times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf drei Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},

			damage: "30x"
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "If you become enchanted by its smooth, elegant, dancelike kicks, you may get drilled hard.",
		'fr-fr': "Si vous vous laissez ensorceler par l'élégance de ses coups de pieds, vous risquez de vous faire perforer."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274514,
				tcgplayer: 86110
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274514,
				tcgplayer: 86110
			}
		}
	]
}

export default card
