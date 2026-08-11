import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Naoki Saito",
	category: "Pokemon",

	dexId: [25],

	description: {
		'en-us': "It raises its tail to check its surroundings. The tail is sometimes struck by lightning in this pose."
	},

	hp: 60,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tail Whip",
			'fr-fr': "Mimi-Queue"
		},

		effect: {
			'en-us': "Flip a coin. If heads, the Defending Pokémon can’t attack during your opponent’s next turn.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire."
		}
	}, {
		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek"
		},

		damage: 30
	}],

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	rarity: "None",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295142,
				tcgplayer: 275062
			}
		}
	]
}

export default card

