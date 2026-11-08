import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'es-es': "Tangrowth",
		'it-it': "Tangrowth",
		'pt-br': "Tangrowth",
		'de-de': "Tangoloss"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Grass Knot",
				'fr-fr': "Nœud Herbe",
				'es-es': "Hierba Lazo",
				'it-it': "Laccioerboso",
				'pt-br': "Nó de Grama",
				'de-de': "Strauchler"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
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
				'en-us': "Flip 2 coins. This attack does 80 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It ensnares prey by extending arms made of vines. Losing arms to predators does not trouble it.",
	},

	thirdParty: {
		cardmarket: 407684,
		tcgplayer: 201142
	}
}

export default card
