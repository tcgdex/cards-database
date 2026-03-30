import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Vipélierre",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Attaque Imprudente",
			},
			damage: "30",
			effect: {
				fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Narumi Sato",

	thirdParty: {
		cardmarket: 877416
	}
}

export default card
