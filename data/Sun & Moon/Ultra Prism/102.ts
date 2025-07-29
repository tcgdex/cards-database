import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Excelangue",
		es: "Lickitung",
		it: "Lickitung",
		pt: "Lickitung",
		de: "Schlurp"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		108,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lap Up",
				fr: "Gobeur",
				es: "A Lengüetazos",
				it: "Leccatina",
				pt: "Sobrepor-se",
				de: "Auflecken"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				es: "Roba 3 cartas.",
				it: "Pesca tre carte.",
				pt: "Compre 3 cartas.",
				de: "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
				es: "Atizar",
				it: "Schianto",
				pt: "Pancada Brusca",
				de: "Slam"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
			},
			damage: "50×",

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
		cardmarket: 316028
	}
}

export default card
