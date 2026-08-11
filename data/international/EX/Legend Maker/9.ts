import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'de-de': "Machomei"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Derail",
				'fr-fr': "Dérailler",
				'de-de': "Entgleisen"
			},
			effect: {
				'en-us': "Discard a Special Energy card, if any, attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur, s'il en a.",
				'de-de': "Lege eine Spezialenergiekarte, die an das Verteidigende Pokémon angelegt ist, auf den Ablagestapel des Gegners."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swift Blow",
				'fr-fr': "Coup surprise",
				'de-de': "Schneller Schlag"
			},
			effect: {
				'en-us': "Does 60 damage plus 20 damage for each React Energy card attached to Machamp.",
				'fr-fr': "Inflige 60 dégâts plus 20 dégâts supplémentaires pour chaque Énergie réaction attachée à Mackogneur.",
				'de-de': "Dieser Angriff fügt 60 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Machomei angelegte Reaktions-Energiekarte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276886,
		tcgplayer: 86963
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
