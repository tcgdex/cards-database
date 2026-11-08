import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Staraptor",
		'fr-fr': "Étouraptor",
		'es-es': "Staraptor",
		'it-it': "Staraptor",
		'pt-br': "Staraptor",
		'de-de': "Staraptor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		398,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Staravia",
		'fr-fr': "Étourvol",
		'es-es': "Staravia",
		'it-it': "Staravia",
		'pt-br': "Staravia",
		'de-de': "Staravia"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cyclone Slash",
				'fr-fr': "Entaille Cyclonique",
				'es-es': "Corte Ciclón",
				'it-it': "Laceravento",
				'pt-br': "Golpe de Ciclone",
				'de-de': "Wirbelschlitzer"
			},
			effect: {
				'en-us': "Before doing damage, have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, demandez à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Antes de infligir daño, haz que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Prima di infliggere i danni, fai scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Antes de causar danos, faça com que seu oponente troque o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				'de-de': "Bevor du Schaden zufügst, veranlasse deinen Gegner dazu, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 70,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brave Bird",
				'fr-fr': "Rapace",
				'es-es': "Pájaro Osado",
				'it-it': "Baldeali",
				'pt-br': "Pássaro Bravo",
				'de-de': "Sturzflug"
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Este Pokémon causa 20 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",
	},

	thirdParty: {
		cardmarket: 286373,
		tcgplayer: 107246
	}
}

export default card
