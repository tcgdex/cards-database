import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "MAHOU",
	category: "Pokemon",

	dexId: [557],

	description: {
		'en-us': "The Pokémon can easily melt holes in hard rocks with a liquid secreted from its mouth."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Withdraw",
			'fr-fr': "Repli"
		},

		effect: {
			'en-us': "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn.",
			'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques durant le prochain tour de votre adversaire."
		}
	}, {
		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche"
		},

		damage: 20
	}],

	name: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque"
	},

	rarity: "None",
	hp: 60,
	types: ["Grass"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281780,
				tcgplayer: 85065
			}
		}
	]
}

export default card

