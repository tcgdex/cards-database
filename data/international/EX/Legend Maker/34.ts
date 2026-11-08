import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
		'de-de': "Georok"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'de-de': "Exoskelett"
			},
			effect: {
				'en-us': "Any damage done to Graveler by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tous dégâts infligés à Gravalanch par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Alle Schadenspunkte, die Georok durch Angriffe zugefügt werden, werden um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Slide",
				'fr-fr': "Éboulement",
				'de-de': "Steinhagel"
			},
			effect: {
				'en-us': "Does 10 damage to 2 of your opponent's Benched Pokémon (1 if there is only 1). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire (ou 1 s'il n'y en a qu'1). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 2 gegnerichen Pokémon auf der Bank 10 Schadenspunkte zu (1 falls nur 1 vorhanden). (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276911,
		tcgplayer: 85891
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
