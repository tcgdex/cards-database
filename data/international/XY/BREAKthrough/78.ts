import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Marowak",
		'fr-fr': "Ossatueur",
		'es-es': "Marowak",
		'it-it': "Marowak",
		'pt-br': "Marowak",
		'de-de': "Knogga"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'de-de': "Tragosso"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sharpshooting",
				'fr-fr': "Tir de Précision",
				'es-es': "Tirador Certero",
				'it-it': "Tiratore Scelto",
				'pt-br': "Tiro Preciso",
				'de-de': "Scharfschuss"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 de danos a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Bone Windmill",
				'fr-fr': "Moulin Osseux",
				'es-es': "Molino Óseo",
				'it-it': "Mulino Osseo",
				'pt-br': "Moinho de Vento de Ossos",
				'de-de': "Knochenmühle"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon-EX, switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-EX, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 60,

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
		'en-us': "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
	},

	thirdParty: {
		cardmarket: 286324,
		tcgplayer: 107197
	}
}

export default card
