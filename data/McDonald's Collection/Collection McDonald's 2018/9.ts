import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Goupix d'Alola",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "You Iribi",

	set: Set,
	dexId: [37],
	hp: 60,
	types: ["Water"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	attacks: [
		{
			name: {
				fr: "Flambeau"
			},
			effect: {
				fr: "Cherchez jusqu'à 2 Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
			}
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				fr: "Verglas"
			},
			damage: 20,
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362780,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362780,
			}
		}
	]
}

export default card