import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Doduo",
		de: "Dodu",
		it: "Doduo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
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
				en: "Fury Attack",
				fr: "Furie",
				de: "Furienschlag",
				it: "Furia"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze \"Kopf\" zeigt, 10 Schadenspunkte zu.",
				it: "Lancia 2 volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa."
			},
			damage: "10x",

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
			value: "-30"
		},
	],

	description: {
		fr: "Cet oiseau vole très mal mais court très vite. Il laisse de gigantesques empreintes de pas.",
		it: "Uccello non molto abile nel volo, ma imbattibile nella corsa. Le sue orme giganteschene segnalano il passaggio. LIV 10 N.84"
	},

	thirdParty: {
		cardmarket: 273743,
		tcgplayer: 42391
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
			cardPath: "data-asia/PMCG/PMCG1/061.ts"
		}
	]
}

export default card
