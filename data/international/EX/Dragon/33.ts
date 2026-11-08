import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
		'de-de': "Seeper"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [116],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Retaliate",
				'fr-fr': "Représailles",
				'de-de': "Vergeltung"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on Horsea.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts pour chaque marqueur de dégât sur Hypotrempe.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff für jede Schadensmarke auf Seeper 10 Schadenspunkte zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Smokescreen",
				'fr-fr': "Brouillard",
				'de-de': "Rauchwolke"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners anzugreifen versucht, wirft dein Gegner 1 Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86188,
				cardmarket: 275910
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86188,
				cardmarket: 275910
			},
		},
	],

}

export default card
