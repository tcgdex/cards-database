import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skelénox",
		es: "Duskull",
		it: "Duskull",
		pt: "Duskull",
		de: "Zwirrlicht"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
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
				fr: "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
				es: "Pon 1 Pokémon Básico de tu pila de descartes en tu Banca.",
				it: "Prendi un Pokémon Base dalla tua pila degli scarti e mettilo in panchina.",
				pt: "Coloque 1 Pokémon Básico da sua pilha de descarte no seu Banco.",
				de: "Lege 1 Basis-Pokémon aus deinem Ablagestapel auf deine Bank."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Spooky Shot",
				fr: "Tir Effrayant",
				es: "Disparo Embrujado",
				it: "Colpomistero",
				pt: "Tiro Assustador",
				de: "Spukschuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299455,
		tcgplayer: 138533
	}
}

export default card
