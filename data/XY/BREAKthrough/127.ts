import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Staraptor",
		fr: "Étouraptor",
		es: "Staraptor",
		it: "Staraptor",
		pt: "Staraptor",
		de: "Staraptor"
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
		en: "Staravia",
		fr: "Étourvol",
		es: "Staravia",
		it: "Staravia",
		pt: "Staravia",
		de: "Staravia"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cyclone Slash",
				fr: "Entaille Cyclonique",
				es: "Corte Ciclón",
				it: "Laceravento",
				pt: "Golpe de Ciclone",
				de: "Wirbelschlitzer"
			},
			effect: {
				en: "Before doing damage, have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Avant d'infliger des dégâts, demandez à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				es: "Antes de infligir daño, haz que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Prima di infliggere i danni, fai scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Antes de causar danos, faça com que seu oponente troque o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				de: "Bevor du Schaden zufügst, veranlasse deinen Gegner dazu, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
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
				en: "Brave Bird",
				fr: "Rapace",
				es: "Pájaro Osado",
				it: "Baldeali",
				pt: "Pássaro Bravo",
				de: "Sturzflug"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
				es: "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 20 danni a se stesso.",
				pt: "Este Pokémon causa 20 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
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



}

export default card
