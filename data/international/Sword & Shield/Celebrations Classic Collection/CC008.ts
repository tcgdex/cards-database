import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	set: Set,

	name: {
		'en-us': "_____'s Pikachu",
		'fr-fr': "Pikachu de ________",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Classic Collection",
	category: "Pokemon",

	dexId: [25],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			name: {
				'en-us': "Birthday Surprise",
				'fr-fr': "Surprise d'anniversaire",
			},
			effect: {
				'en-us': "If it's not your birthday, this attack does 30 damage. If it is your birthday, flip a coin. If heads, this attack does 30 damage plus 50 more damage; if tails, this attack does 30 damage.",
				'fr-fr': "Si ce n'est pas votre anniversaire, cette attaque inflige 30 dégâts. Si c'est votre anniversaire, lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires ; si c'est pile, cette attaque inflige 30 dégâts.",
			},
			damage: "30+",
			cost: [
				"Lightning",
				"Lightning",
			],
		},
	],

	weaknesses: [{
		type: "Fighting",
		value: ""
	}],

	retreat: 1,

	description: {
		'en-us': "Your Birthdate: ______________________________"
	},


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576778,
				tcgplayer: 250325
			}
		},
	],
}

export default card
