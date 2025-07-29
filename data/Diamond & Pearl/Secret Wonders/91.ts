import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Excelangue",
		de: "Schlurp"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		108,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lick",
				fr: "Léchouille",
				de: "Schlecker"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stomp",
				fr: "Écrasement",
				de: "Stampfer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 277844
	}
}

export default card
