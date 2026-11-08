import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		309,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Electromagnetic Jam",
				'fr-fr': "Bouchon électromagnétique",
				'de-de': "Elektromagnetische Blockade"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't attach any Energy cards from his or her hand to the Active Pokémon during his or her next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire ne peut pas attacher de cartes Énergie de sa main à son Pokémon Actif lors de son prochain tour.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner in seinem nächsten Zug keine Energiekarten von seiner Hand an die Aktiven Pokémon anlegen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Using electricity stored in its fur, it stimulates its muscles to heighten its reaction speed.",
		'fr-fr': "Il améliore ses réflexes en stimulant ses muscles grâce à l'électricité dans sa fourrure."
	},

	thirdParty: {
		cardmarket: 277710,
		tcgplayer: 85139
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
