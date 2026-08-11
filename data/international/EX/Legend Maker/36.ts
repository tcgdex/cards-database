import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Kabuto",
		'fr-fr': "Kabuto",
		'de-de': "Kabuto"
	},

	illustrator: "Takao Unno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		140,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mysterious Fossil",
		'fr-fr': "Mystérieux fossile"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Ancient Protection",
				'fr-fr': "Protection ancienne",
				'de-de': "Uralter Schutz"
			},
			effect: {
				'en-us': "Each of your Omanyte, Omastar, Kabuto, Kabutops, and Kabutops ex has no Weakness.",
				'fr-fr': "Vos Amonita, Amonistar, Kabuto, Kabutops et Kabutops ex ne possèdent pas de Faiblesse.",
				'de-de': "Jedes deiner Amonitas, Amoroso, Kabuto, Kabutops und Kabutops ex hat keine Schwäche mehr."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Granite Head",
				'fr-fr': "Tête de granit",
				'de-de': "Granitkopf"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Kabuto by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, les dégâts infligés à Kabuto par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Im nächsten Zug deines Gegners wird Schaden, der Kabuto durch gegneriche Angriffe zugefügt wird, um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276913,
		tcgplayer: 86384
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
