import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Cinderace",
		'fr-fr': "Pyrobut",
		'es-es': "Cinderace",
		'it-it': "Cinderace",
		'pt-br': "Cinderace",
		'de-de': "Liberlo"
	},

	illustrator: "Naoki Saito",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Raboot",
		'fr-fr': "Lapyro",
		'es-es': "Raboot",
		'it-it': "Raboot",
		'pt-br': "Raboot",
		'de-de': "Kickerlo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Pyro Ball",
				'fr-fr': "Ballon Brûlant",
				'es-es': "Balón Ígneo",
				'it-it': "Palla Infuocata",
				'pt-br': "Bola Incendiária",
				'de-de': "Feuerball"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Burning Kick",
				'fr-fr': "Coup de Pied Brûlant",
				'es-es': "Patada Ardiente",
				'it-it': "Calcio Fiammeggiante",
				'pt-br': "Petardo",
				'de-de': "Brennender Schuss"
			},
			effect: {
				'en-us': "Discard all Energy from this Pokémon.",
				'fr-fr': "Défaussez toute l'Énergie de ce Pokémon.",
				'es-es': "Descarta todas las Energías de este Pokémon.",
				'it-it': "Scarta tutte le Energie da questo Pokémon.",
				'pt-br': "Descarte todas as Energias deste Pokémon.",
				'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		'en-us': "It juggles a pebble with its feet, turning it into a burning soccer ball. Its shots strike opponents hard and leave them scorched."
	},

	dexId: [815],

	thirdParty: {
		cardmarket: 427226,
		tcgplayer: 208313
	}
}

export default card
