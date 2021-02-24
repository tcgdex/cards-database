import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Latios ◇",
		fr: "Latios ",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 140,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Fleet",
				fr: "Flotte des Dragons",
			},
			effect: {
				en: "This attack does 50 damage for each of your Evolution Dragon Pokémon in play.",
				fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon Dragon évolués en jeu.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
