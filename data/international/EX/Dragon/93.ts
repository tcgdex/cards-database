import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Latias ex",
		'fr-fr': "Latias ex",
		'de-de': "Latias ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [380],

	hp: 90,

	stage: "Basic",
	types: [
		"Colorless"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Mist Ball",
				'fr-fr': "Boule de brume",
				'de-de': "Nebelball"
			},
			effect: {
				'en-us': "Discard a Fire Energy and a Water Energy attached to Latias ex.",
				'fr-fr': "Défaussez une Énergie  et une Énergie  attachée à Latias ex.",
				'de-de': "Entferne 1 -Energie und 1 -Energie, die an Latias ex angelegt sind und lege sie auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86659,
				cardmarket: 275970
			},
		},
	],

}

export default card
