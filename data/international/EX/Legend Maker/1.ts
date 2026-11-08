import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Aerodactyl",
		'fr-fr': "Ptera",
		'de-de': "Aerodactyl"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 70,

	types: [
		"Colorless",
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
				'en-us': "Reactive Protection",
				'fr-fr': "Protection réactive",
				'de-de': "Reaktiver Schutz"
			},
			effect: {
				'en-us': "Any damage done to Aerodactyl by attacks from your opponent's Pokémon is reduced by 10 for each React Energy card attached to Aerodactyl (after applying Weakness and Resistance).",
				'fr-fr': "Tous dégâts infligés à Ptera par des attaques de Pokémon de votre adversaire sont réduits de 10 pour chaque carte Énergie réaction attachée à Ptera (après application de la Faiblesse et de la Résistance).",
				'de-de': "Jeder Schaden, der Aerodactyl durch Angriffe gegnerischer Pokémon zugefügt wird, wird für jede an Aerodactyl angelegte Reaktions-Energiekarte um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Power Blow",
				'fr-fr': "Coup puissant",
				'de-de': "Mächtiger Schlag"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Ptera.",
				'de-de': "Dieser Angriff fürgt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Aerodactyl angelegte Energie zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Stroke",
				'fr-fr': "Coup foudroyant",
				'de-de': "Geschwindigkeitsschlag"
			},
			effect: {
				'en-us': "During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex.",
				'fr-fr': "Lors du prochain tour de votre adversaire, prévenez tous les effets, dégâts inclus, infligés à Ptera par des attaques de Pokémon-ex de votre adversaire.",
				'de-de': "Verhindere während des nächsten Zugs deines Gegners alle Effekte von Angriffen inklusive Schaden, die Aerodactyl von gegnerischen Pokémon-ex zugefügt werden."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276878,
		tcgplayer: 83468
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
