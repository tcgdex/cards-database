import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
		de: "Baldorfish"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		211,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],

			name: {
				en: "Poison Sting",
				fr: "Dard-venin",
				de: "Giftstachel"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Needle Storm",
				fr: "Nuée d'épines",
				de: "Nadelsturm"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads you get.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf eine Münze, bis du das erste Mal 'Zahl' wirfst. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu, die di bis dahin wirfst."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Pour lancer ses piquants empoisonnés, il doit gonfler son corps en buvant 10 litres d'eau d'un seul coup."
	}
}

export default card
