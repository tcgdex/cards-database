import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Pérégrain",
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	stage: "Stage1",
	evolveFrom: {
		fr: "Lépidonille",
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Cachette",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "kamonabe",

	thirdParty: {
		cardmarket: 877506
	}
}

export default card
