import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Masquerain",
		'fr-fr': "Maskadra",
		'es-es': "Masquerain",
		'it-it': "Masquerain",
		'pt-br': "Masquerain",
		'de-de': "Maskeregen"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Surskit",
		'fr-fr': "Arakdo",
		'es-es': "Surskit",
		'it-it': "Surskit",
		'pt-br': "Surskit",
		'de-de': "Gehweiher"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spiral Gyration",
				'fr-fr': "Rotation Spirale",
				'es-es': "Giro Espiral",
				'it-it': "Spirale Roteante",
				'pt-br': "Giro Espiral",
				'de-de': "Kreiswirbel"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused. Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Lame d'Air",
				'es-es': "Tajo Aéreo",
				'it-it': "Eterelama",
				'pt-br': "Golpe de Ar",
				'de-de': "Luftschnitt"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 50,

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
		'en-us': "It flaps its four wings to hover and fly freely in any direction–to and fro and sideways.",
	},

	thirdParty: {
		cardmarket: 273545,
		tcgplayer: 95898
	}
}

export default card
