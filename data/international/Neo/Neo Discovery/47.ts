import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Unown [D]",
		'fr-fr': "Zarbi D",
		'de-de': "Icognito D"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Darkness",
				'fr-fr': "[Darkness]",
				'de-de': "Dark"
			},
			effect: {
				'en-us': "Whenever a D Pokémon damages 1 of your Pokémon, reduce that damage by 30 (after applying Weakness and Resistance). This power stops working if you have more than 1 Unown D in play. (This power even works if Unown D is Asleep, Confused, or Paralyzed.)",
				'fr-fr': "Quand un Pokémon  inflige des dégâts à votre Pokémon, réduisez ces dégâts de 30 (après application de la Faiblesse et de la Résistance). Ce pouvoir cesse de fonctionner s'il y a plus d'un Zarbi [D] en jeu. (Ce pouvoir fonctionne même si Zarbi [D] est Endormi, Confus ou Paralysé.)",
				'de-de': "Immer wenn ein -Pokémon einem deiner Pokémon Schaden zufügt, reduziere diese Schadenspunkte um 30 (nachdem Schwäche und resistenz verrechnet wurden). Diese Fähigkeit verliert ihre Wirkung, solange du mehr als ein Icognito D im Spiel hast. (Diese Fähigkeit wirkt selbst dann, wenn Icognito D schläft, verwirrt oder gelähmt ist.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.",
		'fr-fr': "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274558,
				tcgplayer: 90203
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274558,
				tcgplayer: 90203
			}
		}
	]
}

export default card

