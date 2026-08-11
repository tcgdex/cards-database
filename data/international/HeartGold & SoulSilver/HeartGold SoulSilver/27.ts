import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Persian",
		'fr-fr': "Persian",
		'de-de': "Snobilikat"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [53],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sharpen Claws",
				'fr-fr': "Affûtage des griffes",
				'de-de': "Krallenschärfer"
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, discard a card from your opponent's hand without looking.",
				'fr-fr': "Lancez 3 pièces. Pour chaque face, défaussez une carte de la main de votre adversaire sans la regarder.",
				'de-de': "Wirf 3 Münzen. Wähle pro \"Kopf\" 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sneaky Attack",
				'fr-fr': "Coup Bas",
				'de-de': "Hinterhältiger Angriff"
			},
			effect: {
				'en-us': "If Persian has any Darkness Energy attached to it, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Si des cartes Énergie Darkness sont attachées à Persian, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn an Snobilikat mindestens 1 -Energie angelegt ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its lithe muscles allow it to walk without making a sound. It attacks in an instant."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87987,
				cardmarket: 278999
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87987,
				cardmarket: 278999
			}
		},
	],

}

export default card
