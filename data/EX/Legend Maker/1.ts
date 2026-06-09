import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Aerodactyl",
		fr: "Ptera",
		de: "Aerodactyl"
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
		en: "Mysterious Fossil",
		fr: "Mystérieux fossile"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Protection",
				fr: "Protection réactive",
				de: "Reaktiver Schutz"
			},
			effect: {
				en: "Any damage done to Aerodactyl by attacks from your opponent's Pokémon is reduced by 10 for each React Energy card attached to Aerodactyl (after applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à Ptera par des attaques de Pokémon de votre adversaire sont réduits de 10 pour chaque carte Énergie réaction attachée à Ptera (après application de la Faiblesse et de la Résistance).",
				de: "Jeder Schaden, der Aerodactyl durch Angriffe gegnerischer Pokémon zugefügt wird, wird für jede an Aerodactyl angelegte Reaktions-Energiekarte um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Blow",
				fr: "Coup puissant",
				de: "Mächtiger Schlag"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Ptera.",
				de: "Dieser Angriff fürgt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Aerodactyl angelegte Energie zu."
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
				en: "Speed Stroke",
				fr: "Coup foudroyant",
				de: "Geschwindigkeitsschlag"
			},
			effect: {
				en: "During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex.",
				fr: "Lors du prochain tour de votre adversaire, prévenez tous les effets, dégâts inclus, infligés à Ptera par des attaques de Pokémon-ex de votre adversaire.",
				de: "Verhindere während des nächsten Zugs deines Gegners alle Effekte von Angriffen inklusive Schaden, die Aerodactyl von gegnerischen Pokémon-ex zugefügt werden."
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
