import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Spinda",
		'fr-fr': "Spinda"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [327],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dish Out",
				'fr-fr': "Distribution"
			},
			effect: {
				'en-us': "Draw a card from the top and the bottom of your deck.",
				'fr-fr': "Piochez une carte du dessus et du dessous de votre deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Synchro Punch",
				'fr-fr': "Synchro-poing"
			},
			effect: {
				'en-us': "If any basic Energy card attached to Spinda is the same type as any Energy attached to the Defending Pokémon, this attack does 10 damage plus 30 more damage.",
				'fr-fr': "Si une carte Énergie attachée à Spinda est du même type qu'une carte Énergie attachée au Pokémon Défenseur, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	description: {
		'en-us': "No two SPINDA have the same pattern of spots. Its tottering step fouls the aim of foes."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89462,
				cardmarket: 278049
			},
		},
	],

}

export default card
