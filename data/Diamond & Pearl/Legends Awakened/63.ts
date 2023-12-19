import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
		de: "Knogga"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Cubone",
		fr: "Tragosso",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Heavy Bone",
				fr: "Os lourd",
				de: "Riesenknochen"
			},
			effect: {
				en: "Flip a coin. If tails, Marowak can't use Heavy Bone during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, Ossatueur ne peut pas utiliser Os lourd lors de votre prochain tour.",
				de: "Wirf 1 Münze. Bei \"Zahl\" kann Knogga Riesenknochen in deinem nächsten Zug nicht einsetzen."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bone Rush",
				fr: "Charge-os",
				de: "Knochenhatz"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 50 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "Ce Pokémon sauvage possède des os depuis sa naissance. Il s'en sert pour combattre avec dextérité."
	}
}

export default card
