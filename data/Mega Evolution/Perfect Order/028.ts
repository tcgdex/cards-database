import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Luxray",
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	stage: "Stage2",
	evolveFrom: {
		fr: "Luxio",
	},
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Assauts Continuels",
			},
			damage: "70×",
			effect: {
				fr: "Cette attaque inflige 70 dégâts pour chaque carte Récompense que vous avez récupérée.",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Décharge Foudroyante",
			},
			damage: "200",
			effect: {
				fr: "Défaussez 2 Énergies de ce Pokémon.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	regulationMark: "J",
	illustrator: "Taiga Kasai",

	thirdParty: {
		cardmarket: 877441
	}
}

export default card
