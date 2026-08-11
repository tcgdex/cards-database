import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'de-de': "Blitza"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei \"Zahl\" fügt dieser Angriff 10 Schaden zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Pin Missile",
				'fr-fr': "Dard-nuée",
				'de-de': "Nadelrakete"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze \"Kopf\" zeigt, 20 Schadenspunkte zu."
			},
			damage: "20x",

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
		'en-us': "It accumulates negative ions from the atmosphere to blast out 10,000-volt lightning bolts.",
		'fr-fr': "Il se charge d'électricité statique pour envoyer des décharges de 10000 volts."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273801,
				tcgplayer: 106982
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273801,
				tcgplayer: 106982
			}
		}
	],
}

export default card
