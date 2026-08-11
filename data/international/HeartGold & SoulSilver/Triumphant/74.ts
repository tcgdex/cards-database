import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'de-de': "Enton"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [54],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Tripping Headbutt",
				'fr-fr': "Coup d’boule agile",
				'de-de': "Stolper-Kopfnuss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage to 1 of your opponent's Pokémon. If tails, this attack does 30 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. Si c’est pile, cette attaque inflige 30 dégâts à l’un de vos Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 1 Pokémon deines Gegners 30 Schadenspunkte zu. Bei \"Zahl\" fügt dieser Angriff 1 deiner Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has mystical powers but doesn’t recall that it has used them. That is why it always looks puzzled."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88440,
				cardmarket: 279604
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279604,
				tcgplayer: 88440
			}
		},
	],

}

export default card
