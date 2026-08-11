import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'de-de': "Owei"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [102],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Continuous Eggsplosion",
				'fr-fr': "Éclate continue",
				'de-de': "Dauernde Eggsplosion"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce qu’elle tombe sur pile. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf solange eine Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

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
		'en-us': "Using telepathy only they can employ, they always form a cluster of six Exeggcute."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85349,
				cardmarket: 279035
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85349,
				cardmarket: 279035
			}
		},
	],

}

export default card
