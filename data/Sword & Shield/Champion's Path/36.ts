import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Galarian Linoone",
		fr: "Linéon de Galar"
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Galarian Zigzagoon",
		fr: "Zigzaton de Galar"
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès"
			},
			effect: {
				en: "This Pokémon also does 20 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 20 dégâts."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
