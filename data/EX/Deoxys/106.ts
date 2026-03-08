import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Latios Star",
		fr: "Latios ☆",
		de: "Latios *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miraculous Light",
				fr: "Lumière miraculeuse",
				de: "Miraculous Light"
			},
			effect: {
				en: "Remove 1 damage counter and all Special Conditions from Latios Star.",
				fr: "Retirez à Latios  1 marqueur de dégât et tous ses États Spéciaux.",
				de: "Remove1 damage counter and all Special Conditiones from Latios*."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Psychic",
			],
			name: {
				en: "Shining Star",
				fr: "Étoile brillante",
				de: "Shining Star"
			},
			effect: {
				en: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, discard all Energy cards attached to Latios Star and this attack does 50 damage plus 100 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué de niveau 2, défaussez toutes les cartes Énergie attachées à Latios ☆. Cette attaque inflige 50 dégâts plus 100 dégâts supplémentaires.",
				de: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, discard all Energy cards attached to Latios* and this attack does 50 damage plus 100 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 86672
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
