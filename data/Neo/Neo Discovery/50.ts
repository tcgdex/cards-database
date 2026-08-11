import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [N]",
		fr: "Zarbi N",
		de: "Icognito N"
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
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
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
		en: "Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.",
		fr: "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	},

	abilities: [{
		name: {
			fr: "[Normal]",
			de: "Normal"
		},

		effect: {
			fr: "Quand un Pokémon  inflige des dégâts à un de vos Pokémon, réduisez ces dégâts de 30 (après application de la Faiblesse et de la Résistance). Ce pouvoir cesse de fonctionner s'il y a plus d'un Zarbi [N] en jeu. (Ce pouvoir fonctionne même si Zarbi [N] est Endormi, Confus ou Paralysé.)",
			de: "Immer wenn ein -Pokémon einem deiner Pokémon Schaden zufügt, reduziere diese Schadenspunkte um 30 (nachdem Schwäche und Resistenz verrechnet wurden). Diese Fähigkeit verliert ihre Wirkung, solange du mehr als ein Icognito N im Spiel hast. (Diese Fähigkeit wirkt selbst dann, wenn Icognito N schläft, verwirrt oder gelähmt ist.)"
		},

		type: "Pokemon Power"
	}],


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274561,
				tcgplayer: 90223
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274561,
				tcgplayer: 90223
			}
		}
	]
}

export default card

