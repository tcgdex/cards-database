import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Tympole",
		fr: "Tritonde",
		es: "Tympole",
		it: "Tympole",
		pt: "Tympole",
		de: "Schallquap"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		535,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Get Loud",
				fr: "Tapageur",
				es: "Haz Ruido",
				it: "Chiasso",
				pt: "Fazer Barulho",
				de: "Rambazamba"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
				es: "Canon",
				it: "Coro",
				pt: "Circular",
				de: "Kanon"
			},
			effect: {
				en: "This attack does 10 damage times the number of your Pokémon that have the Round attack.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Pokémon possédant l’attaque Chant Canon.",
				es: "Este ataque hace 10 puntos de daño por cada uno de tus Pokémon que tenga el ataque Canon.",
				it: "Questo attacco infligge 10 danni per ogni tuo Pokémon che conosce l’attacco Coro.",
				pt: "Este ataque causa 10 de danos vezes o número de Pokémon que possuem o ataque Circular.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl deiner Pokémon zu, die Kanon beherrschen."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
