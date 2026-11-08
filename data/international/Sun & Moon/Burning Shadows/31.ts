import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Kingdra",
		'fr-fr': "Hyporoi",
		'es-es': "Kingdra",
		'it-it': "Kingdra",
		'pt-br': "Kingdra",
		'de-de': "Seedraking"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Brine",
				'fr-fr': "Saumure",
				'es-es': "Salmuera",
				'it-it': "Acquadisale",
				'pt-br': "Salmoura",
				'de-de': "Lake"
			},
			effect: {
				'en-us': "This attack does 90 damage to 1 of your opponent’s Pokémon that has any damage counters on it. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 90 dégâts à l’un des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 90 puntos de daño a 1 de los Pokémon de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 90 danni a uno dei Pokémon del tuo avversario che abbia dei segnalini danno. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 90 pontos de dano a 1 dos Pokémon do seu oponente que tiver algum contador de dano nele (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Tornado Shot",
				'fr-fr': "Tir Tornade",
				'es-es': "Disparo Tornado",
				'it-it': "Colpo Tornado",
				'pt-br': "Disparo de Tornado",
				'de-de': "Tornadoschuss"
			},
			effect: {
				'en-us': "Discard a Water Energy from this Pokémon. This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez une Énergie Water de ce Pokémon. Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Descarta 1 Energía Water de este Pokémon. Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Scarta un’Energia Water assegnata a questo Pokémon. Questo attacco infligge 30 danni a uno dei Pokémon in panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Descarte 1 Energia Water deste Pokémon. Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Lege 1 Water-Energie von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is said that it usually hides in underwater caves. It can create whirlpools by yawning.",
	},

	thirdParty: {
		cardmarket: 299568,
		tcgplayer: 138511
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
