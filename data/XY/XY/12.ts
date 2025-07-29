import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Chespin",
		fr: "Marisson",
		es: "Chespin",
		it: "Chespin",
		pt: "Chespin",
		de: "Igamaro"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		650,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-Nuée",
				es: "Pin Misil",
				it: "Missilspillo",
				pt: "Míssil de Espinhos",
				de: "Nadelrakete"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Esse ataque causa 10 de danos vezes o número de caras.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281349
	}
}

export default card
