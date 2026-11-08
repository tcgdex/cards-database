import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	description: {
		'en-us': "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it."
	},
	
	hp: 130,
	types: ["Water"],

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Hydro Splash",
			'fr-fr': "Hydro-éclaboussure"
		},

		damage: 50
	}, {
		name: {
			'en-us': "Hyper Beam",
			'fr-fr': "Ultralaser"
		},

		damage: 80,

		effect: {
			'en-us': "Discard an Energy card attached to the Defending Pokémon.",
			'fr-fr': "Défaussez une carte Énergie attachée au Pokémon Défenseur."
		}
	}],

}

export default card