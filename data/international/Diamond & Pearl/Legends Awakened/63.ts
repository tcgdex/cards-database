import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Marowak",
		'fr-fr': "Ossatueur",
		'de-de': "Knogga"
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
		'en-us': "Cubone",
		'fr-fr': "Tragosso",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Heavy Bone",
				'fr-fr': "Os lourd",
				'de-de': "Riesenknochen"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Marowak can't use Heavy Bone during your next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Ossatueur ne peut pas utiliser Os lourd lors de votre prochain tour.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" kann Knogga Riesenknochen in deinem nächsten Zug nicht einsetzen."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Bone Rush",
				'fr-fr': "Charge-os",
				'de-de': "Knochenhatz"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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
		'en-us': "From its birth, this savage Pokémon constantly holds bones. It is skilled in using them as weapons.",
		'fr-fr': "Ce Pokémon sauvage possède des os depuis sa naissance. Il s'en sert pour combattre avec dextérité."
	},

	thirdParty: {
		cardmarket: 278212,
		tcgplayer: 87227
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
