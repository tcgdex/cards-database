import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "M Blastoise EX",
		fr: "M Tortank EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 220,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Blastoise-EX",
		fr: "Tortank-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Bombard",
				fr: "Hydroflagration",
			},
			effect: {
				en: "This attack does 30 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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

	retreat: 3,



}

export default card
