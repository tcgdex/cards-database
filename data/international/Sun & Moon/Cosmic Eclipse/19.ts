import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Dartrix",
		'fr-fr': "Efflèche",
		'es-es': "Dartrix",
		'it-it': "Dartrix",
		'pt-br': "Dartrix",
		'de-de': "Arboretoss"
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
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leafage",
				'fr-fr': "Feuillage",
				'es-es': "Follaje",
				'it-it': "Fogliame",
				'pt-br': "Folhagem",
				'de-de': "Blattwerk"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Flick",
				'fr-fr': "Battement d’Aile",
				'es-es': "Sacudida de Alas",
				'it-it': "Colpetto d’Ala",
				'pt-br': "Chicote de Asa",
				'de-de': "Schwingenschlag"
			},
			effect: {
				'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
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

	description: {
		'en-us': "This narcissistic Pokémon is a clean freak. If you don't groom it diligently, it will stop listening to you.",
	},

	thirdParty: {
		cardmarket: 407749,
		tcgplayer: 201175
	}
}

export default card
