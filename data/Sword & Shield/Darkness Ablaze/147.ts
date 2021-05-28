import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Staraptor",
		fr: "Étouraptor"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Staravia",
		fr: "Étourvol"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hurricane Blender",
				fr: "Ouragan Mixant"
			},
			effect: {
				en: "Move any amount of Energy from your Pokémon to your other Pokémon in any way you like.",
				fr: "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez vers vos autres Pokémon, comme il vous plaît."
			},
			damage: 70,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brave Bird",
				fr: "Rapace"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 30 dégâts."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	regulationMark: "D"
}

export default card
