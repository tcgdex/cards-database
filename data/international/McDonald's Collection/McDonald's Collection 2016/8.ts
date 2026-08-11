import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Kanako Eo",
	category: "Pokemon",

	dexId: [39],

	description: {
		'en-us': "It captivates foes with its huge, round eyes, then lulls them to sleep by singing a soothing melody."
	},

	hp: 60,
	types: ["Fairy"],

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade"
		},

		damage: 10
	}, {
		name: {
			'en-us': "Heartfelt Song",
			'fr-fr': "Chanson du Cœur"
		},

		effect: {
			'en-us': "Discard a Darkness Energy attached to your opponent’s Active Pokémon.",
			'fr-fr': "Défaussez une Énergie  attachée au Pokémon Actif de votre adversaire."
		}
	}],

	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou"
	},

	rarity: "None",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295144,
				tcgplayer: 275064
			}
		}
	]
}

export default card

