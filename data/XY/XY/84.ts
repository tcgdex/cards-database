import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		680,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		it: "Honedge",
		pt: "Honedge",
		de: "Gramokles"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Dual Blades",
				fr: "Duo de Lames",
				es: "Doble Hoja",
				it: "Duplicelama",
				pt: "Lâminas Duplas",
				de: "Duoklingen"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281421,
		tcgplayer: 84881
	}
}

export default card
