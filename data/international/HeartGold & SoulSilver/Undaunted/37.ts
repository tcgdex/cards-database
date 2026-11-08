import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Skuntank",
		'fr-fr': "Moufflair",
		'de-de': "Skunktank"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [435],

	hp: 80,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Stunky",
		'fr-fr': "Moufouette"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Stun Gas",
				'fr-fr': "Gaz étourdissant",
				'de-de': "Betäubungsgas"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Empoisonné. Si c’est pile, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It attacks by spraying a repugnant fluid from its tail, but the stench dulls after a few squirts."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279290,
				tcgplayer: 89282
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279290,
				tcgplayer: 89282
			}
		}
	],

}

export default card
