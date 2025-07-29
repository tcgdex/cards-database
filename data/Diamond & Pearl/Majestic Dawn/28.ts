import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
		de: "Plusle"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "(-) Boost",
				fr: "Boost (-)",
				de: "(-) Aufladung"
			},
			effect: {
				en: "If Minun is on your Bench, this attack does 20 damage plus 20 more damage.",
				fr: "Si Negapi se trouve sur votre Banc, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn sich Minun auf deiner Bank befindet, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278077
	}
}

export default card
