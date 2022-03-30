import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Yveltal EX",
		fr: "Yveltal EX",
		es: "Yveltal EX",
		it: "Yveltal EX",
		pt: "Yveltal EX",
		de: "Yveltal EX"
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
				en: "Evil Ball",
				fr: "Balle Maléfique",
				es: "Bola Malvada",
				it: "Pallamalefica",
				pt: "Bola Maligna",
				de: "Unheilsball"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Energy attached to both Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía unida a ambos Pokémon Activos.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
				pt: "Esse ataque causa 20 de danos adicionais vezes a quantidade de Energia ligada a ambos os Pokémon Ativos.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl der an beiden Aktiven Pokémon angelegten Energien zu."
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
				en: "Y Cyclone",
				fr: "Cyclone Y",
				es: "Ciclón Y",
				it: "Ciclone Y",
				pt: "Ciclone Y",
				de: "Y-Wirbel"
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
				es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
				pt: "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Verschiebe 1 an dieses Pokémon angelegte Energie auf 1 Pokémon auf deiner Bank."
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
	stage: "Basic"
}

export default card
