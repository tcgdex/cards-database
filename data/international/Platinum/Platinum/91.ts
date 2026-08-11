import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'de-de': "Riolu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [447],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Light Punch",
				'fr-fr': "Poing léger",
				'de-de': "Light Punch"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steady Punch",
				'fr-fr': "Poing énergétique",
				'de-de': "Steady Punch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has the peculiar power of being able to see emotions such as joy and rage in the form of waves."
	},

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88756,
				cardmarket: 278512
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278512,
				tcgplayer: 88756
			}
		},
		{
			type:"normal",
			stamp: ["comic-con"],
			thirdParty: {
				tcgplayer: 238865
			}
		},
		{
			type:"normal",
			stamp: ["comic-con","staff"],
			thirdParty: {
				tcgplayer: 238866
			}
		}
	],

}

export default card
