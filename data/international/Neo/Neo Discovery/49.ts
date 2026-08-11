import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Unown [M]",
		'fr-fr': "Zarbi M",
		'de-de': "Icognito M"
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

	abilities: [{
		name: {
			'fr-fr': "[Metal]",
			'de-de': "Metal"
		},

		effect: {
			'fr-fr': "Quand un Pokémon  inflige des dégâts à votre Pokémon, réduisez ces dégâts de 30 (après application de la Faiblesse et de la Résistance). Ce pouvoir cesse de fonctionner s'il y a plus d'un Zarbi [M] en jeu. (Ce pouvoir fonctionne même si Zarbi [M] est Endormi, Confus ou Paralysé.)",
			'de-de': "Immer wenn ein -Pokémon einem deiner Pokémon Schaden zufügt, reduziere diese Schadenspunkte um 30 (nachdem Schwäche und Resistenz verrechnet wurden). Diese Fähigkeit verliert ihre Wirkung, solange du mehr als ein Icognito M im Spiel hast. (Diese Fähigkeit wirkt selbst dann, wenn Icognito M schläft, verwirrt oder gelähmt ist.)\"> Neue Beschreibung"
		},

		type: "Pokemon Power"
	}],


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274560,
				tcgplayer: 90221
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274560,
				tcgplayer: 90221
			}
		}
	]
}

export default card

