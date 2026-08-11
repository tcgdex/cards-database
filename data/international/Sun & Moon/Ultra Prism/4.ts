import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Roselia",
		'fr-fr': "Rosélia",
		'es-es': "Roselia",
		'it-it': "Roselia",
		'pt-br': "Roselia",
		'de-de': "Roselia"
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
				'en-us': "Petal Dance",
				'fr-fr': "Danse-Fleur",
				'es-es': "Danza Pétalo",
				'it-it': "Petalodanza",
				'pt-br': "Dança das Pétalas",
				'de-de': "Blättertanz"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage for each heads. This Pokémon is now Confused.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
				'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara. Este Pokémon pasa a estar Confundido.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa. Questo Pokémon viene confuso.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara. Este Pokémon agora está Confuso.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu. Dieses Pokémon ist jetzt verwirrt."
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

	description: {
		'en-us': "Roselia that drink nutritionally rich springwater are said to reveal rare coloration when they bloom.",
	},

	thirdParty: {
		cardmarket: 315936,
		tcgplayer: 157621
	}
}

export default card
