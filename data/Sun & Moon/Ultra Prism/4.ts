import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Rosélia",
		es: "Roselia",
		it: "Roselia",
		pt: "Roselia",
		de: "Roselia"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-Fleur",
				es: "Danza Pétalo",
				it: "Petalodanza",
				pt: "Dança das Pétalas",
				de: "Blättertanz"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage for each heads. This Pokémon is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
				es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara. Este Pokémon pasa a estar Confundido.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa. Questo Pokémon viene confuso.",
				pt: "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara. Este Pokémon agora está Confuso.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu. Dieses Pokémon ist jetzt verwirrt."
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

	retreat: 1,

	thirdParty: {
		cardmarket: 315936
	}
}

export default card
