import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Quick Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage. If tails, this attack does 10 damage."
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
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agility"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Pikachu.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Pikachu.",
				'de-de': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Pikachu."
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
	retreat: 1,


	description: {
		'en-us': "It raises its tail to check its surroundings. The tail is sometimes struck by lightning in this pose.",
		'fr-fr': "Il dresse sa queue pour observer les alentours. Parfois les éclairs frappent sa queue quand elle est en l'air."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274470,
				tcgplayer: 88072
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274470,
				tcgplayer: 88072
			}
		}
	]
}

export default card
