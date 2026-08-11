import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'pt-br': "Lickitung",
		'de-de': "Schlurp"
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
				'en-us': "Lap Up",
				'fr-fr': "Gobeur",
				'es-es': "A Lengüetazos",
				'it-it': "Leccatina",
				'pt-br': "Sobrepor-se",
				'de-de': "Auflecken"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
				'es-es': "Roba 3 cartas.",
				'it-it': "Pesca tre carte.",
				'pt-br': "Compre 3 cartas.",
				'de-de': "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
				'es-es': "Atizar",
				'it-it': "Schianto",
				'pt-br': "Pancada Brusca",
				'de-de': "Slam"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
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

	description: {
		'en-us': "Its tongue is twice the length of its body. It can be moved like an arm for grabbing food and attacking.",
	},

	thirdParty: {
		cardmarket: 316028,
		tcgplayer: 157719
	}
}

export default card
