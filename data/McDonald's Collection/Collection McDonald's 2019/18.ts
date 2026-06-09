import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Lokhlass",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Saya Tsuruta",

	set: Set,
	dexId: [131],
	hp: 120,
	types: ["Water"],

	stage: "Basic",
	retreat: 2,

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
				fr: "Aquaballe"
			},
			damage: 20,
			effect: {
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			}
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				fr: "Hydrocanon"
			},
			damage: "70+",
			effect: {
				fr: "Cette attaque inflige 10 dégâts supplémentaires multipliés par le nombre d'Énergies Water attachées à ce Pokémon."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479759,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581861,
			}
		}
	]
}

export default card

