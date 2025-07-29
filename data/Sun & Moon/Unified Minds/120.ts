import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Archen",
		fr: "Arkéapti",
		es: "Archen",
		it: "Archen",
		pt: "Archen",
		de: "Flapteryx"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		566,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Endeavor",
				fr: "Effort",
				es: "Esfuerzo",
				it: "Rimonta",
				pt: "Esforço",
				de: "Notsituation"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano a mais para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "20+",

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

	thirdParty: {
		cardmarket: 388402
	}
}

export default card
