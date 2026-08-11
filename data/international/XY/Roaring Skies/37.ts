import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol",
		'es-es': "Gliscor",
		'it-it': "Gliscor",
		'pt-br': "Gliscor",
		'de-de': "Skorgro"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		472,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'pt-br': "Gligar",
		'de-de': "Skorgla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rock Slide",
				'fr-fr': "Éboulement",
				'es-es': "Avalancha",
				'it-it': "Frana",
				'pt-br': "Deslize de Pedras",
				'de-de': "Steinhagel"
			},
			effect: {
				'en-us': "This attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 de danos a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its flight is soundless. It uses its lengthy tail to carry off its prey… Then its elongated fangs do the rest.",
	},

	thirdParty: {
		cardmarket: 282705,
		tcgplayer: 98073
	}
}

export default card
