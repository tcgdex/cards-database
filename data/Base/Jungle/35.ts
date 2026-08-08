import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		de: "Kokowei",
		it: "Exeggutor"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		it: "Exeggcute"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Teleport",
				fr: "Téléport",
				de: "Teleport",
				it: "Teletrasporto"
			},
			effect: {
				en: "Switch Exeggutor with 1 of your Benched Pokémon.",
				fr: "Échangez Noadkoko avec 1 des Pokémon de votre Banc.",
				de: "Tausche Kokowei mit einem Pokémon auf deiner Bank aus.",
				it: "Scambia Exeggutor con uno dei tuoi Pokémon in Panchina."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Big Eggsplosion",
				fr: "Grosse éclate",
				de: "Große Eggsplosion",
				it: "Grande Ovosplosione"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
				fr: "Lancez un nombre de pièces égal au nombre d'Énergies attachées à Noadkoko. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf eine Anzahl Münzen, die der auf Kokowei abgelegten Energiemenge entspricht. Dieser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt, 20 Schadenspunkte zu.",
				it: "Lancia una moneta tante volte quante sono le carte Energia assegnate a Exeggutor. Questo attacco infligge 20 danni ogni volta che esce testa."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		en: "Legend has it that on rare occasions, one of its heads will drop off and continue on as an Exeggcute.",
		fr: "On raconte que si une de ses têtes se détache, elle se transforme en un Nœunœuf.",
		it: "Narra una leggenda che talvolta una delle sue teste può cadere e dare vita a un nuovo Exeggcute."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273832,
				tcgplayer: 45138
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273832,
				tcgplayer: 45138
			}
		}
	],
}

export default card
