import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Cubone",
		fr: "Osselait",
		de: "Tragosso"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lonely Bone",
				fr: "Ossolitaire",
				de: "Einsamer Knochen"
			},
			effect: {
				en: "Any damage done to Cubone by your opponent’s attacks is reduced by 20 for each Marowak in your discard pile (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Osselait par les attaques de votre adversaire sont réduits de 20 pour chaque Ossatueur dans votre pile de défausse (après application de la Faiblesse et de la Résistance).",
				de: "Schaden, der Tragosso durch Angriffe deines Gegners zugefügt wird, wird für jedes Knogga in deinem Ablagestapel um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Bone Rush",
				fr: "Charge-os",
				de: "Knochenhatz"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce jusqu’à ce qu’elle tombe sur pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

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
		en: "If it is sad or lonely, the skull it wears shakes and emits a plaintive and mournful sound."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279590
	}
}

export default card
