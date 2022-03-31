import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Skorupi",
		fr: "Rapion",
		es: "Skorupi",
		it: "Skorupi",
		pt: "Skorupi",
		de: "Pionskora"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		451,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
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
				pt: "Jogue 4 moedas. Este ataque causa 10 de danos vezes o número de caras.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
