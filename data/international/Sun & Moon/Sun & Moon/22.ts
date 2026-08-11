import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'es-es': "Arcanine",
		'it-it': "Arcanine",
		'pt-br': "Arcanine",
		'de-de': "Arkani"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes Calcinantes",
				'es-es': "Llama Abrasadora",
				'it-it': "Fiamme Ustionanti",
				'pt-br': "Chama Cauterizante",
				'de-de': "Sengende Flammen"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Firestorm",
				'fr-fr': "Orage de Flammes",
				'es-es': "Tormenta de Fuego",
				'it-it': "Tempesta di Fuoco",
				'pt-br': "Tempestade de Fogo",
				'de-de': "Brandsturm"
			},
			effect: {
				'en-us': "Discard 3 Fire Energy from this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies Fire de ce Pokémon.",
				'es-es': "Descarta 3 Energías Fire de este Pokémon.",
				'it-it': "Scarta tre Energie Fire assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias Fire deste Pokémon.",
				'de-de': "Lege 3 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Overflowing with beauty and majesty, this strong Pokémon appears in ancient Eastern folklore.",
	},

	thirdParty: {
		cardmarket: 295330,
		tcgplayer: 126893
	}
}

export default card
