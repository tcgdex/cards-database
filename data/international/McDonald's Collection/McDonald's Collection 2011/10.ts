import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [599],

	description: {
		'en-us': "The two minigears that mesh together are predetermined. Each will rebound from other minigears without meshing."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Charge Beam",
			'fr-fr': "Rayon Chargé"
		},

		damage: 10,

		effect: {
			'en-us': "Flip a coin. If heads, attach an Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, cherchez une carte Énergie dans votre pile de défausse et attachez-la à ce Pokémon."
		}
	}, {
		name: {
			'en-us': "Irongrip",
			'fr-fr': "Poigne de Fer"
		},

		damage: 20
	}],

	name: {
		'en-us': "Klink",
		'fr-fr': "Tic"
	},

	rarity: "None",
	hp: 50,
	types: ["Metal"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281799,
				tcgplayer: 86480
			}
		}
	]
}

export default card

