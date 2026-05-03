import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Chétiflor",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Masako Yamashita",

	set: Set,
	dexId: [69],
	hp: 60,
	types: ["Grass"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				fr: "Pâté"
			},
			damage: 20,
			effect: {
				fr: "Soignez 10 dégâts à ce Pokémon."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479689,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581847,
			}
		}
	]
}

export default card

