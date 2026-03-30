import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Rattata",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Bélier",
			},
			damage: "30",
			effect: {
				fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Shinya Komatsu",

	thirdParty: {
		cardmarket: 877476
	}
}

export default card
