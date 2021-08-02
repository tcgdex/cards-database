import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Primal Kyogre EX",
		fr: "Primo-Kyogre-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 240,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Kyogre-EX",
		fr: "Kyogre-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Tidal Storm",
				fr: "Max Θ",
			},
			effect: {
				en: "Move 2 Energy from this Pokémon to 1 of your Benched Pokémon. This attack does 30 damage to each of your opponent’s Benched Pokémon-EX. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 150,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				fr: "Tempête Océanique",
			},
			effect: {
				fr: "Déplacez 2 Énergies de ce Pokémon vers l'un de vos Pokémon de Banc. Cette attaque inflige 30 dégâts à chacun des Pokémon-EX de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
