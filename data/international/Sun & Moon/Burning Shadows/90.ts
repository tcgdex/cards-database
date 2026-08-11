import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Malamar",
		'fr-fr': "Sepiatroce",
		'es-es': "Malamar",
		'it-it': "Malamar",
		'pt-br': "Malamar",
		'de-de': "Calamanero"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		687,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
				'es-es': "Psicorrayo",
				'it-it': "Psicoraggio",
				'pt-br': "Feixe Psíquico",
				'de-de': "Psystrahl"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Slosh",
				'fr-fr': "Renversement d’Énergie",
				'es-es': "Chapoteo de Energía",
				'it-it': "Schizzo Energetico",
				'pt-br': "Salpicar Energia",
				'de-de': "Energieflut"
			},
			effect: {
				'en-us': "You may move all Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez déplacer toute l’Énergie de ce Pokémon vers l’un de vos Pokémon de Banc",
				'es-es': "Puedes mover todas las Energías de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Puoi spostare tutta l’Energia da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Você pode mover todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank verschieben."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It wields the most compelling hypnotic powers of any Pokémon, and it forces others to do whatever it wants.",
	},

	thirdParty: {
		cardmarket: 299492,
		tcgplayer: 138582
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
