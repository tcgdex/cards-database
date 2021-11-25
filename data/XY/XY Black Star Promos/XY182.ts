import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Mandibuzz BREAK",
		fr: "Vaututrice TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
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
		en: "Mandibuzz",
		fr: "Vaututrice"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wings of Disaster",
				fr: "Ailes de la Déroute"
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness and Resistance. Then, discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. N'appliquez ni la Faiblesse ni la Résistance. Défaussez toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire."
			},

		},
	],

	retreat: 0
}

export default card
