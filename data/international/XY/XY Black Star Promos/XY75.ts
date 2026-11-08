import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Palkia",
		'fr-fr': "Palkia",
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		484,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Cross Slicer",
				'fr-fr': "Tranch'Croix"
			},
			effect: {
				'en-us': "Your opponent can't attach Energy from his or her hand to the Defending Pokémon during his or her next turn.",
				'fr-fr': "Votre adversaire ne peut pas attacher d'Énergie de sa main au Pokémon Défenseur pendant son prochain tour."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.",
	},

	thirdParty: {
		cardmarket: 289798
	}
}

export default card
