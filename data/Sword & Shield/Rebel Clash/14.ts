import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [708],

	name: {
		en: "Phantump",
		fr: "Brocélôme",
		es: "Phantump",
		it: "Phantump",
		pt: "Phantump",
		de: "Paragoni"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dark Guidance",
				fr: "Conseiller Obscur",
				es: "Guía Siniestra",
				it: "Guida Oscura",
				pt: "Diretriz Obscura",
				de: "Dunkles Geleit"
			},
			effect: {
				en: "Put a Basic Pokémon from your discard pile onto your Bench.",
				fr: "Placez un Pokémon de base de votre pile de défausse sur votre Banc.",
				es: "Pon 1 Pokémon Básico de tu pila de descartes en tu Banca.",
				it: "Prendi un Pokémon Base dalla tua pila degli scarti e mettilo in panchina.",
				pt: "Coloque 1 Pokémon Básico da sua pilha de descarte no seu Banco.",
				de: "Lege 1 Basis-Pokémon aus deinem Ablagestapel auf deine Bank."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
				es: "Bomba Germen",
				it: "Semebomba",
				pt: "Bomba de Sementes",
				de: "Samenbomben"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "After a lost child perished in the forest, their spirit possessed a tree stump, causing the spirit's rebirth as this Pokémon."
	},

	thirdParty: {
		cardmarket: 457463,
		tcgplayer: 213084
	}
}

export default card
