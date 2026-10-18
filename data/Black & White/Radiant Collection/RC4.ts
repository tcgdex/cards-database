import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Charmeleon",
		es: "Charmeleon",
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmander",
		es: "Charmander",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Support",
				es: "Buscar Apoyo",
			},
			effect: {
				en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				es: "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
			},
		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Slash",
				es: "Cuchillada",
			},

			damage: 80,
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "My precious friend who is always with me. I have so many things I want to tell you.",
		es: "Mi preciado amigo, que siempre va conmigo. Tengo tantas cosas que contarte.",
	},

	thirdParty: {
		tcgplayer: 113745
	}
}

export default card
