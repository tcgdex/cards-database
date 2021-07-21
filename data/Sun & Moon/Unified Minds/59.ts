import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magnéton",
		es: "Magneton",
		it: "Magneton",
		pt: "Magneton",
		de: "Magneton"
	},
	illustrator: "Yumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Lightning Ball",
				fr: "Boule Éclair",
				es: "Bola Relámpago",
				it: "Fulminpalla",
				pt: "Bola de Raios",
				de: "Kugelblitz"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tri Attack",
				fr: "Triplattaque",
				es: "Triataque",
				it: "Tripletta",
				pt: "Triataque",
				de: "Triplette"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
