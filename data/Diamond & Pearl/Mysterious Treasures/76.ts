import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scrunch",
				fr: "Compresse"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Chansey by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous dégâts infligés à Leveinard par des attaques lors du prochain tour de votre adversaire."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès"
			},
			effect: {
				en: "Chansey does 60 damage to itself.",
				fr: "Leveinard s'inflige 60 dégâts."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	description: {
		fr: "Il est censé apporter la joie. Ce Pokémon charitable offre ses œufs aux blessés."
	}
}

export default card
