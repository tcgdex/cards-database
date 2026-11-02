import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Doduo",
		es: "Doduo",
		it: "Doduo",
		pt: "Doduo",
		de: "Dodu"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gatling Peck",
				fr: "Mitra-Bec",
				de: "Schnabelgeschütz"
			},
			effect: {
				en: "Flip 5 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 5 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 5 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
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
		en: "The brains in its two heads appear to communicate emotions to each other with telepathic power.",
		de: "Die Gehirne der beiden Köpfe kommunizieren ihre Gefühle über Telepathie."
	},

	thirdParty: {
		cardmarket: 280839,
		tcgplayer: 84866
	}
}

export default card
