import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'de-de': "Kokowei"
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
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Teleport",
				'fr-fr': "Téléport",
				'de-de': "Teleport"
			},
			effect: {
				'en-us': "Switch Exeggutor with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Noadkoko avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Kokowei mit einem Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Big Eggsplosion",
				'fr-fr': "Grosse éclate",
				'de-de': "Große Eggsplosion"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez un nombre de pièces égal au nombre d'Énergies attachées à Noadkoko. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf eine Anzahl Münzen, die der auf Kokowei abgelegten Energiemenge entspricht. Dieser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt, 20 Schadenspunkte zu."
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
		'en-us': "Legend has it that on rare occasions, one of its heads will drop off and continue on as an Exeggcute.",
		'fr-fr': "On raconte que si une de ses têtes se détache, elle se transforme en un Nœunœuf."
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
