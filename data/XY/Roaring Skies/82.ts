import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		661,
	],

	hp: 40,

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
				en: "Acrobatics",
				fr: "Acrobatie",
				es: "Acróbata",
				it: "Acrobazia",
				pt: "Acrobático",
				de: "Akrobatik"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 10 danni in più.",
				pt: "Jogue 2 moedas. Este ataque causa 10 de danos adicionais para cada cara.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

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
		cardmarket: 282750,
		tcgplayer: 98118
	}
}

export default card
