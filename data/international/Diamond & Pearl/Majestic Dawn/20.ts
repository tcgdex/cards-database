import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Glaceon",
		'fr-fr': "Givrali",
		'de-de': "Glaziola"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Shot",
				'fr-fr': "Coup glacial",
				'de-de': "Eisgeschoss"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Icy Wind",
				'fr-fr': "Vent glacé",
				'de-de': "Eissturm"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' schläft das Verteidigende Pokémon jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As a protective technique, it can completely freeze its fur to make its hairs stand like needles.",
	},

	thirdParty: {
		cardmarket: 278054,
		tcgplayer: 85745
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
			stamp: ["platinum"]
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["countdown-calendar"]
		}
	]
}

export default card
