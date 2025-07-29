import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		pt: "Golurk",
		de: "Golgantes"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		623,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Smash",
				fr: "Triple Éclate",
				es: "Golpe Triple",
				it: "Tripla Schiacciata",
				pt: "Pancada Tripla",
				de: "Dreifachschmetterer"
			},
			effect: {
				en: "Flip 3 coins. This attack does 60 more damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 60 puntos de daño más por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 60 danni in più ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 60 pontos de dano a mais para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 60 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Golurk Hammer",
				fr: "Maillet Golemastoc",
				es: "Martillo Golurk",
				it: "Martello Golurk",
				pt: "Martelo Golurk",
				de: "Golgantes-Hammer"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 302182
	}
}

export default card
