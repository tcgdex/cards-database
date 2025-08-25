import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [716],

	name: {
		en: "Xerneas",
		fr: "Xerneas",
		es: "Xerneas",
		it: "Xerneas",
		pt: "Xerneas",
		de: "Xerneas"
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
				en: "Geo Hunt",
				fr: "Géo-Chasse",
				es: "Geobúsqueda",
				it: "Geoagguato",
				pt: "Geocaçada",
				de: "Geo-Jagd"
			},
			effect: {
				en: "Put a card from your discard pile into your hand.",
				fr: "Ajoutez à votre main une carte de votre pile de défausse.",
				es: "Pon 1 carta de tu pila de descartes en tu mano.",
				it: "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Coloque 1 carta da sua pilha de descarte na sua mão.",
				de: "Nimm 1 Karte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Aurora Gain",
				fr: "Puissance Boréale",
				es: "Ganar Aurora",
				it: "Prendiaurora",
				pt: "Aurora",
				de: "Aurora-Verstärkung"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "When the horns on its head shine in seven different colors, it is said to be sharing everlasting life."
	},

	thirdParty: {
		cardmarket: 511810,
		tcgplayer: 226486
	}
}

export default card
