import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Fluvetin",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Doux Parfum",
			},
			effect: {
				fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
			},
		},
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "Collision",
			},
			damage: "10",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Pani Kobayashi",

	thirdParty: {
		cardmarket: 877449
	}
}

export default card
