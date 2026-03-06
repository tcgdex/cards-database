import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Torchic",
		fr: "Poussifeu",
		de: "Flemmli"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sand Attack",
				fr: "Jet de sable",
				de: "Sandangriff"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wenn das Verteidigende Pokémon im nächsten Zug deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat der entsprechende Angriff keine Auswirkungen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277146,
		tcgplayer: 89958
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
