import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Rowlet",
		fr: "Brindibou",
		es: "Rowlet",
		it: "Rowlet",
		pt: "Rowlet",
		de: "Bauz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		722,
	],

	hp: 50,

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
				en: "Fury Attack",
				fr: "Furie",
				es: "Ataque Furia",
				it: "Furia",
				pt: "Ataque de Fúria",
				de: "Furienschlag"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
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

	retreat: 1
}

export default card
