import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Raticate G",
		'fr-fr': "Rattatac ",
		'de-de': "Rattikarl G"
	},
	illustrator: "Ryota Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [20],
	hp: 70,
	types: [
		"Colorless"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Find",
				'fr-fr': "Trouver",
				'de-de': "Finden"
			},
			effect: {
				'en-us': "Search your discard pile for a Trainer card or a Supporter card, show it to your opponent, and put it into your hand.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Dresseur ou une carte Supporter, montrez-la à votre adversaire et placez-la dans votre main.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 Trainer- oder Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Biting Fang",
				'fr-fr': "Croc mordant",
				'de-de': "Reißfänge"
			},
			effect: {
				'en-us': "Flip a coin, if heads this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278769,
				tcgplayer: 88609
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278769,
				tcgplayer: 88609
			}
		},
	],

}

export default card
