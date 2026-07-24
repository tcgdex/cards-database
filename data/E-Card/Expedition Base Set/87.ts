import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Houndour",
		fr: "Chrysacier",
		de: "Safcon"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [228],

	hp: 50,

	types: [
		"Darkness"
	],

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette",
				de: "Exoskelett"
			},
			effect: {
				en: "All damage done to Metapod is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés par des attaques sur Chrysacier sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Aller Schaden, der Safcon von Angriffen zugefügt wird, wird um 20 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 10,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87388,
				cardmarket: 274962
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
