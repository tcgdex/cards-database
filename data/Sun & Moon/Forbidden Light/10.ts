import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Gogoat",
		fr: "Chevroum",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		673,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Milk Drink",
				fr: "Lait à Boire",
			},
			effect: {
				en: "Flip 2 coins. For each heads, heal 40 damage from this Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque côté face, soignez 40 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
