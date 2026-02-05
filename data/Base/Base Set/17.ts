import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		de: "Bibor",
		it: "Beedrill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		it: "Kakuna"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twineedle",
				fr: "Double-Dard",
				de: "Duonadel",
				it: "Doppio ago"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze Kopf zeigt, 30 Schadenspunkte zu.",
				it: "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa."
			},
			damage: "30x",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-Venin",
				de: "Giftstachel",
				it: "Velenospina"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon vergiftet.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Avvelenato."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

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

	description: {
		fr: "Il vole à très grande vitesse. Il se bat avec les dards empoisonnés de ses bras.",
		it: " Vola ad alta velocità e attacca con i grandi pungiglioni velenosi che ha sulle zampe anteriori e sulla coda. LIV 32 N.15"
	},

	thirdParty: {
		cardmarket: 273712,
		tcgplayer: 42357
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/012.ts"
		}
	]
}

export default card
