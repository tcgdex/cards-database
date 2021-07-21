import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Trumbeak",
		fr: "Piclairon",
		es: "Trumbeak",
		it: "Trumbeak",
		pt: "Trumbeak",
		de: "Trompeck"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		732,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pikipek",
		fr: "Picassaut",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bullet Seed",
				fr: "Balle Graine",
				es: "Recurrente",
				it: "Semitraglia",
				pt: "Projétil de Semente",
				de: "Kugelsaat"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

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



}

export default card
