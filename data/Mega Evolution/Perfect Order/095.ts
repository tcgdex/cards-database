import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Psystigri",
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Tit'Sieste",
			},
			effect: {
				fr: "Soignez 20 dégâts de ce Pokémon.",
			},
		},
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "Ruée",
			},
			damage: "10",
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "MINAMINAMI Take",

	thirdParty: {
		cardmarket: 877512
	}
}

export default card
