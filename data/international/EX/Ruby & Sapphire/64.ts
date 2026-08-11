import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyena",
		'de-de': "Fiffyen"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [261],

	hp: 50,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
				'de-de': "Abschlagen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez une carte de la main de votre adversaire sans la regarder et défaussez-la.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' wähle 1 zufällige Karte von der Hand deines Gegners. Dein Gegner legt diese Karte auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rear Kick",
				'fr-fr': "Ruade",
				'de-de': "Rückwärtskick"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275712,
				tcgplayer: 88294
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275712,
				tcgplayer: 88294
			}
		},
	],

}

export default card
