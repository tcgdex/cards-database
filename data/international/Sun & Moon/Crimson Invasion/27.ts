import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Milotic",
		'fr-fr': "Milobellus",
		'es-es': "Milotic",
		'it-it': "Milotic",
		'pt-br': "Milotic",
		'de-de': "Milotic"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "TLC",
				'fr-fr': "Soins Dévoués",
				'es-es': "Ternura y Cuidado",
				'it-it': "TVB",
				'pt-br': "Amor e Carinho",
				'de-de': "Streicheleinheiten"
			},
			effect: {
				'en-us': "Shuffle 1 of your opponent’s Benched Pokémon that has any damage counters on it and all cards attached to it into their deck.",
				'fr-fr': "Mélangez dans le deck de votre adversaire un de ses Pokémon de Banc ayant au moins un marqueur de dégâts et toutes les cartes qui lui sont attachées.",
				'es-es': "Pon 1 de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él y todas las cartas unidas a él en su baraja y barájalas todas.",
				'it-it': "Rimischia uno dei Pokémon in panchina del tuo avversario che abbia dei segnalini danno e tutte le carte a esso assegnate nel suo mazzo.",
				'pt-br': "Embaralhe 1 dos Pokémon no Banco do seu oponente que tiver algum contador de dano nele e todas as cartas ligadas a ele no baralho do seu oponente.",
				'de-de': "Mische 1 Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt, und alle an es angelegten Karten in sein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ocean Cyclone",
				'fr-fr': "Cyclone Océanique",
				'es-es': "Ciclón Oceánico",
				'it-it': "Ciclone Oceanico",
				'pt-br': "Ciclone Oceânico",
				'de-de': "Meeressturm"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Milotic has provided inspiration to many artists. It has even been referred to as the most beautiful Pokémon of all.",
	},

	thirdParty: {
		cardmarket: 311877,
		tcgplayer: 149049
	}
}

export default card
