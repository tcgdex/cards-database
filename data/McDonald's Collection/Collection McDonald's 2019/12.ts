import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Sabelette d'Alola",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Shin Nagasawa",

	set: Set,
	dexId: [27],
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
				fr: "Combo-Griffe"
			},
			damage: "10×",
			effect: {
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479729,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581855,
			}
		}
	]
}

export default card

