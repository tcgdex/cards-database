import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [716],

	name: {
		'en-us': "Xerneas",
		'fr-fr': "Xerneas",
		'es-es': "Xerneas",
		'it-it': "Xerneas",
		'pt-br': "Xerneas",
		'de-de': "Xerneas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Geo Hunt",
				'fr-fr': "Géo-Chasse",
				'es-es': "Geobúsqueda",
				'it-it': "Geoagguato",
				'pt-br': "Geocaçada",
				'de-de': "Geo-Jagd"
			},
			effect: {
				'en-us': "Put a card from your discard pile into your hand.",
				'fr-fr': "Ajoutez à votre main une carte de votre pile de défausse.",
				'es-es': "Pon 1 carta de tu pila de descartes en tu mano.",
				'it-it': "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Coloque 1 carta da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 1 Karte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Gain",
				'fr-fr': "Puissance Boréale",
				'es-es': "Ganar Aurora",
				'it-it': "Prendiaurora",
				'pt-br': "Aurora",
				'de-de': "Aurora-Verstärkung"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "When the horns on its head shine in seven different colors, it is said to be sharing everlasting life."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511810,
				tcgplayer: 226486
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511810,
				tcgplayer: 226486
			}
		},
	],
}

export default card
