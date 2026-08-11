import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'de-de': "Tragosso"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [104],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Lonely Bone",
				'fr-fr': "Ossolitaire",
				'de-de': "Einsamer Knochen"
			},
			effect: {
				'en-us': "Any damage done to Cubone by your opponent's attacks is reduced by 20 for each Marowak in your discard pile (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à Osselait par les attaques de votre adversaire sont réduits de 20 pour chaque Ossatueur dans votre pile de défausse (après application de la Faiblesse et de la Résistance).",
				'de-de': "Schaden, der Tragosso durch Angriffe deines Gegners zugefügt wird, wird für jedes Knogga in deinem Ablagestapel um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bone Rush",
				'fr-fr': "Charge-os",
				'de-de': "Knochenhatz"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce qu’elle tombe sur pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If it is sad or lonely, the skull it wears shakes and emits a plaintive and mournful sound."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84535,
				cardmarket: 279590
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279590,
				tcgplayer: 84535
			}
		},
	],

}

export default card
