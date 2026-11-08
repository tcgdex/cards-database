import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Unown C",
		'fr-fr': "Zarbi C",
		'de-de': "Icognito C"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Call",
				'fr-fr': "CRIER",
				'de-de': "CALL"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Unown C is on your Bench, you may flip a coin. If heads, search your deck for any 1 Unown and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Zarbi C est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre deck 1 Zarbi et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff), wenn Icognito C auf deiner Bank liegt, kannst du 1 Münze werfen. Bei \"Kopf\" durchsuche dein Deck nach 1 Icognito-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Shaped like ancient writing, it is a huge mystery whether language or UNOWN came first.",
		'fr-fr': "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de Zarbi est apparu en premier."
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
