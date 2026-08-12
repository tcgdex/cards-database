import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Pidove",
		fr: "Poichigeon",
		es: "Pidove",
		it: "Pidove",
		pt: "Pidove",
		de: "Dusselgurr"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		519,
	],

	hp: 50,

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
				en: "Quick Attack",
				fr: "Vive-Attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 10 weitere Schadenspunkte zu."
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Each follows its Trainer's orders as best it can, but they sometimes fail to understand complicated commands.",
		de: "Gewöhnlich hört es zwar auf das, was sein Trainer sagt, doch manchmal kommt es mit komplizierten Befehlen nicht klar."
	},

	thirdParty: {
		cardmarket: 279822,
		tcgplayer: 88054
	}
}

export default card
