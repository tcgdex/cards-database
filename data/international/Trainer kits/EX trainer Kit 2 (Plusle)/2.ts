import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [309],
	set: Set,

	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Lightning"
	],

	attacks: [{
		cost: [
			"Lightning",
		],
		name: {
			'en-us': "Recharge",
			'fr-fr': "Recharger"
		},
		effect: {
			'en-us': "Search your deck for a Lightning Energy card and attach it to Electrike. Shuffle your deck afterward.",
			'fr-fr': "Cherchez dans votre deck 1 carte Énergie  et attachez-la à Dynavolt. Ensuite, mélangez votre deck."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-attaque"
		},
		effect: {
			'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires."
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
				cardmarket: 277182,
				tcgplayer: 85136
			}
		},
	],

}

export default card
