import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Arceus",
		fr: "Arceus"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		493,
	],

	hp: 130,

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
				en: "Type Switch",
				fr: "Échange de Type"
			},
			effect: {
				en: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy, or Dragon type. Until the end of your next turn, this Pokémon is that type.",
				fr: "Choisissez le type , , , , , , , ,  ou . Jusqu'à la fin de votre prochain tour, ce Pokémon est de ce type."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Blast",
				fr: "Violente Déflagration"
			},
			effect: {
				en: "Discard an Energy card attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 289806
	}
}

export default card
