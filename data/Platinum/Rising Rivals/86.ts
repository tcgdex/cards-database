import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot Niv. 6",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		13,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Rescue String",
				fr: "Ficelle sauveuse",
			},
			effect: {
				en: "Search your discard pile for up to 5 Pokémon, show them to your opponent, and shuffle them into your deck.",
				fr: "Choisissez dans votre pile de défausse jusqu'à 5 Pokémon, montrez-les à votre adversaire et mélangez-les à votre deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Needling Sting",
				fr: "Piqûre piquante",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
