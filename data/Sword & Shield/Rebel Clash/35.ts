import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Cinderace V",
		fr: "Pyrobut V"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Field Runner",
				fr: "Coureur de Fond"
			},
			effect: {
				en: "If a Stadium is in play, this Pokémon has no Retreat Cost.",
				fr: "Si un Stade est en jeu, ce Pokémon n’a pas de Coût de Retraite."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Crimson Legs",
				fr: "Jambes Carmin"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 210,
	types: ["Fire"]
}

export default card
