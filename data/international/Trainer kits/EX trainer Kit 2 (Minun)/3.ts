import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche"
	},

	attacks: [{
		cost: [
			"Fire",
			"Colorless"
		],
		name: {
			'en-us': "Flare",
			'fr-fr': "Intimidation"
		},
		damage: 30
	}, {
		cost: [
			"Fire",
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Damage Burn",
			'fr-fr': "Brûlure"
		},
		effect: {
			'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 20 more damage.",
			'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires."
		},
		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Water",
		},
	],

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277199,
				tcgplayer: 84228
			}
		},
	],

}

export default card
