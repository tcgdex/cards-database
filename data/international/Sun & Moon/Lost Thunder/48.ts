import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Heatran",
		'fr-fr': "Heatran",
		'es-es': "Heatran",
		'it-it': "Heatran",
		'pt-br': "Heatran",
		'de-de': "Heatran"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 140,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lava Burn",
				'fr-fr': "Brûlure de Lave",
				'es-es': "Quemadura de Lava",
				'it-it': "Brucialava",
				'pt-br': "Queimadura de Lava",
				'de-de': "Brennende Lava"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Bazooka",
				'fr-fr': "Bazooka Thermique",
				'es-es': "Bazooka Ígneo",
				'it-it': "Magmabazooka",
				'pt-br': "Bazuca de Calor",
				'de-de': "Heat-Bazooka"
			},
			effect: {
				'en-us': "Discard the top 5 cards of your deck.",
				'fr-fr': "Défaussez les 5 cartes du dessus de votre deck.",
				'es-es': "Descarta las 5 primeras cartas de tu baraja.",
				'it-it': "Scarta le prime cinque carte del tuo mazzo.",
				'pt-br': "Descarte as 5 primeiras cartas do seu baralho.",
				'de-de': "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Boiling blood, like magma, circulates through its body. It makes its dwelling place in volcanic caves.",
	},

	thirdParty: {
		cardmarket: 365688,
		tcgplayer: 178853
	}
}

export default card
