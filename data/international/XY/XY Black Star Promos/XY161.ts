import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Braixen",
		'fr-fr': "Roussil"
	},

	illustrator: "kirisAki",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		654,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Destructive Flame",
				'fr-fr': "Flamme Destructrice"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crackling Ribbon",
				'fr-fr': "Ruban Crépitant"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When the twig is plucked from its tail, friction sets the twig alight. The flame is used to send signals to its allies.",
	},

	thirdParty: {
		cardmarket: 295152
	}
}

export default card
