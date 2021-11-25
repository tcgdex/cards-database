import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Chesnaught BREAK",
		fr: "Blindépique TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		652,
	],

	hp: 190,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Chesnaught",
		fr: "Blindépique",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tough Hammer",
				fr: "Marteau Solide",
			},
			effect: {
				en: "This Pokémon does 30 damage to itself. This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Ce Pokémon s'inflige 30 dégâts. Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 160,

		},
	],

	retreat: 0
}

export default card
