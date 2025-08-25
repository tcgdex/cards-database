import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2",
		es: "Porygon2",
		it: "Porygon2",
		pt: "Porygon2",
		de: "Porygon2"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
		es: "Porygon",
		it: "Porygon",
		pt: "Porygon",
		de: "Porygon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharpen",
				fr: "Affûtage",
				es: "Afilar",
				it: "Affilatore",
				pt: "Afiar",
				de: "Schärfer"
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
				pt: "Tri Ataque",
				de: "Triplette"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 284246,
		tcgplayer: 101487
	}
}

export default card
