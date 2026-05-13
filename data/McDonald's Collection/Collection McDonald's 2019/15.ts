import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Hypotrempe",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Mizue",

	set: Set,
	dexId: [116],
	hp: 50,
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
			cost: ["Colorless"],
			name: {
				fr: "Hydrocanon"
			},
			damage: "10+",
			effect: {
				fr: "Cette attaque inflige 10 dégâts supplémentaires multipliés par le nombre d'Énergies Water attachées à ce Pokémon."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479744,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581858,
			}
		}
	]
}

export default card

