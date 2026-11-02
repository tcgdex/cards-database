import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari",
		de: "Sterndu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Numbing Water",
				fr: "Eau Paralysante",
				de: "Betäubendes Wasser"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "In many places, there are folktales of stardust falling into the ocean and becoming Staryu.",
		de: "Einer weitverbreiteten Volkssage zufolge ist Sterndu aus Sternennebel entstanden, der ins Meer gefallen war."
	},

	thirdParty: {
		cardmarket: 394777,
		tcgplayer: 197657
	}
}

export default card
