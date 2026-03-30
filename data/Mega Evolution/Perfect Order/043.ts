import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Golgopathe",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	stage: "Stage1",
	evolveFrom: {
		fr: "Opermine",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Bras de Pierre",
			},
			effect: {
				fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Attachez une carte Énergie Combat de base de votre main à l'un de vos Pokémon Combat.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Enfoncement",
			},
			damage: "80",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Kazumasa Yasukuni",

	thirdParty: {
		cardmarket: 877457
	}
}

export default card
