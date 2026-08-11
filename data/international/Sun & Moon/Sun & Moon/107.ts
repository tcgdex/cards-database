import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Trumbeak",
		'fr-fr': "Piclairon",
		'es-es': "Trumbeak",
		'it-it': "Trumbeak",
		'pt-br': "Trumbeak",
		'de-de': "Trompeck"
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
		'en-us': "Pikipek",
		'fr-fr': "Picassaut",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bullet Seed",
				'fr-fr': "Balle Graine",
				'es-es': "Recurrente",
				'it-it': "Semitraglia",
				'pt-br': "Projétil de Semente",
				'de-de': "Kugelsaat"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
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

	description: {
		'en-us': "By bending its beak, it can produce a variety of call and brand itself a noisy nuisance for its neighbors.",
	},

	thirdParty: {
		cardmarket: 295419,
		tcgplayer: 126979
	}
}

export default card
