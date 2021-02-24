import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Virizion",
		fr: "Viridium",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		640,
	],
	hp: 100,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Justified",
				fr: "Cœur Noble",
			},
			effect: {
				en: "Each of this Pokémon's attacks does 50 more damage to Darkness Pokémon (before applying Weakness and Resistance).",
				fr: "Chaque attaque de ce Pokémon inflige 50 dégâts supplémentaires aux Pokémon Darkness (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Blade",
				fr: "Lame-Feuille",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
