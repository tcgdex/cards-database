import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		'fr-fr': "Ptitard",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Asako Ito",

	set: Set,
	dexId: [60],
	hp: 60,
	types: ["Water"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Water"],
			name: {
				'fr-fr': "Pistolet à O"
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'fr-fr': "Hydrocanon"
			},
			damage: "30+",
			effect: {
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires multipliés par le nombre d'Énergies [Water] attachées à ce Pokémon."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362782,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362782,
			}
		}
	]
}

export default card

