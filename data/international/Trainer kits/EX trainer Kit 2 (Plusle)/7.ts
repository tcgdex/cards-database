import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [325],
	set: Set,

	name: {
		'en-us': "Spoink",
		'fr-fr': "Spoink"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Psychic"
	],

	attacks: [{
		cost: [
			"Psychic",
		],
		name: {
			'en-us': "Knock Away",
			'fr-fr': "Asticotage"
		},
		effect: {
			'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
		},
		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Psychic",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277191,
				tcgplayer: 89475
			}
		},
	],

}

export default card
