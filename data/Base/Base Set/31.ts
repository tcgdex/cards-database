import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Jynx",
		fr: "Lippoutou",
		de: "Rossana"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Doubleslap",
				fr: "Torgnoles",
				de: "Duplexhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze Kopf zeigt, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Meditate",
				fr: "Yoga",
				de: "Meditation"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Défenseur.",
				de: "Fügt 20 Schadenspunkte plus 10 weitere für jede auf dem verteidigenden Pokémon abgelegte Schadensmarke zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il lui suffit de méditer pour lancer une puissante attaque psychique."
	},

	thirdParty: {
		cardmarket: 273726,
		tcgplayer: 42373
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/048.ts"
		}
	]
}

export default card
