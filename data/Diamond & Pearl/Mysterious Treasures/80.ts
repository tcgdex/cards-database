import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Doduo",
		de: "Dodu"
	},

	illustrator: "Ken Sugimori",
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
			],
			name: {
				en: "Double Stab",
				fr: "Coup double",
				de: "Doppelstich"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Accelerating Stab",
				fr: "Poignard accélérateur",
				de: "Beschleunigter Stich"
			},
			effect: {
				en: "Doduo can't use Accelerating Stab during your next turn.",
				fr: "Doduo ne peut pas utiliser Coup de poignard accélérateur lors de votre prochain tour.",
				de: "Dodu kann Beschleunigter Stich in deinem nächsten Zug nicht einsetzen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		fr: "Ses deux cerveaux semblent communiquer leurs émotions grâce à un lien télépathique."
	},

	thirdParty: {
		cardmarket: 277709
	}
}

export default card
