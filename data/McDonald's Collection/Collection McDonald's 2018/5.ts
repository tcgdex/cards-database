import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Caninos",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "MAHOU",

	set: Set,
	dexId: [58],
	hp: 80,
	types: ["Fire"],

	stage: "Basic",
	retreat: 2,

	attacks: [
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				fr: "Bélier"
			},
			effect: {
				fr: "Ce Pokémon s'inflige 20 dégâts."
			},
			damage: 60
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362776,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362776,
			}
		}
	]
}

export default card

