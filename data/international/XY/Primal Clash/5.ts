import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'es-es': "Tangrowth",
		'it-it': "Tangrowth",
		'pt-br': "Tangrowth",
		'de-de': "Tangoloss"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'es-es': "Tangela",
		'it-it': "Tangela",
		'pt-br': "Tangela",
		'de-de': "Tangela"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Drain",
				'fr-fr': "Méga-Sangsue",
				'es-es': "Megaagotar",
				'it-it': "Megassorbimento",
				'pt-br': "Megadreno",
				'de-de': "Megasauger"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
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
				'en-us': "This attack does 10 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Esse ataque causa 10 de danos adicionais para cada Colorless no Custo para Recuar do Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Its vines grow so profusely that, in the warm season, you can't even see its eyes.",
	},

	thirdParty: {
		cardmarket: 273536,
		tcgplayer: 95889
	}
}

export default card
