import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Dartrix",
		fr: "Efflèche",
		es: "Dartrix",
		it: "Dartrix",
		pt: "Dartrix",
		de: "Arboretoss"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		723,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Rowlet",
		fr: "Brindibou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leafage",
				fr: "Feuillage",
				es: "Follaje",
				it: "Fogliame",
				pt: "Folhagem",
				de: "Blattwerk"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Flick",
				fr: "Battement d’Aile",
				es: "Sacudida de Alas",
				it: "Colpetto d’Ala",
				pt: "Chicote de Asa",
				de: "Schwingenschlag"
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
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

	thirdParty: {
		cardmarket: 407749
	}
}

export default card
