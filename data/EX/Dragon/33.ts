import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Horsea",
		fr: "Hypotrempe",
		de: "Seeper"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		116,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retaliate",
				fr: "Représailles",
				de: "Vergeltung"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on Horsea.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts pour chaque marqueur de dégât sur Hypotrempe.",
				de: "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff für jede Schadensmarke auf Seeper 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard",
				de: "Rauchwolke"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners anzugreifen versucht, wirft dein Gegner 1 Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 86188,
		cardmarket: 275910
	}
}

export default card
