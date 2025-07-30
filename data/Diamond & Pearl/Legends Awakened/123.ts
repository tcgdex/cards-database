import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Swinub",
		fr: "Marcracrin",
		de: "Quiekel"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 60,

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
				en: "Sniff Out",
				fr: "Flairer",
				de: "Rumschnüffeln"
			},
			effect: {
				en: "Flip a coin. If heads, put any 1 card from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c'est face, placez n'importe quelle carte de votre pile de défausse dans votre main.",
				de: "Wirf 1 Münze. Bei \"Kopf\" wähle 1 Karte aus deinem Ablagestapel und nimm sie auf deine Hand."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Lunge Out",
				fr: "Allonger",
				de: "Sprungangriff"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278272,
		tcgplayer: 89703
	}
}

export default card
