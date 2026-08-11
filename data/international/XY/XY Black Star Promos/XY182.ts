import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mandibuzz BREAK",
		'fr-fr': "Vaututrice TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		630,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Mandibuzz",
		'fr-fr': "Vaututrice"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Wings of Disaster",
				'fr-fr': "Ailes de la Déroute"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness and Resistance. Then, discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. N'appliquez ni la Faiblesse ni la Résistance. Défaussez toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire."
			},

		},
	],

	thirdParty: {
		cardmarket: 295171
	}
}

export default card
