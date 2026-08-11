import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'de-de': "Karpador"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	evolveFrom: {
		'fr-fr': "Magicarpe",
	},

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Sea Spray",
				'fr-fr': "Spray de mer",
				'de-de': "Gischt"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, draw a card.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, piochez une carte.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Ziehe pro \"Kopf\" 1 Karte."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Splash",
				'fr-fr': "Trempette",
				'de-de': "Platscher"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is said to be the world's weakest Pokémon. No one knows why it has managed to survive.",
		'fr-fr': "Ce Pokémon est réputé pour être le plus faible au monde. Nul ne sait comment son espèce perdure."
	},

	thirdParty: {
		cardmarket: 278363,
		tcgplayer: 87030
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		},
	]
}

export default card
