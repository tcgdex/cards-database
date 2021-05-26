import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Runerigus",
		fr: "Tutétékri de Galar"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Galarian Yamask",
		fr: "Tutafeh de Galar"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spreading Spite",
				fr: "Mépris Réparti"
			},
			effect: {
				en: "For each damage counter on this Galarian Runerigus, put 2 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Pour chaque marqueur de dégâts sur ce Tutétékri de Galar, placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mad Hammer",
				fr: "Marteau en Folie"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 30 dégâts."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 100,
	types: ["Fighting"]
}

export default card
