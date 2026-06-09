import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Ralts",
		fr: "Tarsal",
		de: "Trasla"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hypnosis",
				fr: "Hypnose",
				de: "Hypnosis"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Boom",
				fr: "Psycho-boom",
				de: "Psychic Boom"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergie attachées au Pokémon Défenseur.",
				de: "Does 10 damage times the amount of Energy attached to the Defending Pokémon."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275851,
		tcgplayer: 88553
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		}
	]
}

export default card
