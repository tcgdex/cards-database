import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy",
		'es-es': "Seaking",
		'it-it': "Seaking",
		'pt-br': "Seaking",
		'de-de': "Golking"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		119,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène",
		'es-es': "Goldeen",
		'it-it': "Goldeen",
		'pt-br': "Goldeen",
		'de-de': "Goldini"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Ripping Horn",
				'fr-fr': "Corne Déchirante",
				'es-es': "Cuerno Desgarrador",
				'it-it': "Squarciacorno",
				'pt-br': "Chifre Lacerante",
				'de-de': "Reißendes Horn"
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, discard an Energy from your opponent's Active Pokémon.",
				'fr-fr': "Lancez 3 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 3 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Lancia tre volte una moneta. Ogni volta che esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue 3 moedas. Para cada cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 3 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercement",
				'es-es': "Perforar",
				'it-it': "Perforare",
				'pt-br': "Perfurar",
				'de-de': "Durchbohren"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Using its horn, it bores holes in riverbed boulders, making nests to prevent its eggs from washing away."
	},

	thirdParty: {
		cardmarket: 436389,
		tcgplayer: 208346
	}
}

export default card
