import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		746,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cowardice",
				fr: "Échappée",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard all cards attached to this Pokémon and return it to your hand. You can't use this Ability during your first turn or on the turn this Pokémon was put into play.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toutes les cartes attachées à ce Pokémon et le remettre dans votre main. Vous ne pouvez utiliser ce talent ni pendant votre premier tour ni pendant le tour durant lequel ce Pokémon a été joué.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
