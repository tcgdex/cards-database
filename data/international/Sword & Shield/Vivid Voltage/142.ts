import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [641],

	name: {
		'en-us': "Tornadus",
		'fr-fr': "Boréas",
		'es-es': "Tornadus",
		'it-it': "Tornadus",
		'pt-br': "Tornadus",
		'de-de': "Boreos"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Jet Draft",
				'fr-fr': "Souffle Supersonique",
				'es-es': "Corriente Jet",
				'it-it': "Scia Jet",
				'pt-br': "Vento de Jato",
				'de-de': "Düsendurchzug"
			},
			effect: {
				'en-us': "Discard a Special Energy from your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
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
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un'Energia da questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Tornadus expels massive energy from its tail, causing severe storms. Its power is great enough to blow houses away."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512420,
				tcgplayer: 226600
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512420,
				tcgplayer: 226600
			}
		},
	],
}

export default card
