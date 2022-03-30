import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Circle Circuit",
				fr: "Cercle Électrik",
				es: "Circuito Circular",
				it: "Elettroruota",
				pt: "Circuito Circular",
				de: "Rundparcours"
			},
			effect: {
				en: "This attack does 20 damage times the number of your Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de vos Pokémon de Banc.",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en Banca.",
				it: "Questo attacco infligge 20 danni per ogni Pokémon che hai in panchina.",
				pt: "Esse ataque causa 20 de danos vezes o número de Pokémon no seu Banco.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
				es: "Rayo",
				it: "Fulmine",
				pt: "Relâmpago",
				de: "Donnerblitz"
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
				es: "Descarta todas las Energías unidas a este Pokémon.",
				it: "Scarta tutte le Energie assegnate a questo Pokémon.",
				pt: "Descarte toda a Energia ligada a este Pokémon.",
				de: "Lege alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
