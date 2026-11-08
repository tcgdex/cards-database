import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'de-de': "Tauros"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [128],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Show Off",
				'fr-fr': "Crâneur",
				'de-de': "Show Off"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Énergie de base. Montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Take Down"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Tauros does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Tauros s'inflige 10 dégâts.",
				'de-de': "Flip a coin. If tails, Tauros does 10 damage to itself."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Once it takes aim at its foe, it makes a headlong charge. It is famous for its violent nature."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89765,
				cardmarket: 278519
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278519,
				tcgplayer: 89765
			}
		}
	],

}

export default card
