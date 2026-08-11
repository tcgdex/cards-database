import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Yveltal EX",
		'fr-fr': "Yveltal EX",
		'es-es': "Yveltal EX",
		'it-it': "Yveltal EX",
		'pt-br': "Yveltal EX",
		'de-de': "Yveltal EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 170,

	types: [
		"Darkness",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Evil Ball",
				'fr-fr': "Balle Maléfique",
				'es-es': "Bola Malvada",
				'it-it': "Pallamalefica",
				'pt-br': "Bola Maligna",
				'de-de': "Unheilsball"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Energy attached to both Active Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía unida a ambos Pokémon Activos.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
				'pt-br': "Esse ataque causa 20 de danos adicionais vezes a quantidade de Energia ligada a ambos os Pokémon Ativos.",
				'de-de': "Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl der an beiden Aktiven Pokémon angelegten Energien zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Y Cyclone",
				'fr-fr': "Cyclone Y",
				'es-es': "Ciclón Y",
				'it-it': "Ciclone Y",
				'pt-br': "Ciclone Y",
				'de-de': "Y-Wirbel"
			},
			effect: {
				'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
				'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Verschiebe 1 an dieses Pokémon angelegte Energie auf 1 Pokémon auf deiner Bank."
			},
			damage: 90,

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

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281415,
		tcgplayer: 90700
	}
}

export default card
