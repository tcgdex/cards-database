import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [179],
	set: Set,

	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 50,

	types: [
		"Lightning"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Minor Errand-Running",
			'fr-fr': "Rendez-vous mineur"
		},
		effect: {
			'en-us': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			'fr-fr': "Choisissez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck."
		}
	}, {
		cost: [
			"Lightning",
			"Colorless"
		],
		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-attaque"
		},
		effect: {
			'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
		},
		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277204,
				tcgplayer: 87200
			}
		},
	],

}

export default card
