import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Chenipan",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Sekio",

	set: Set,
	dexId: [10],
	hp: 50,
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
			cost: ["Grass"],
			name: {
				fr: "Attaque Surprise"
			},
			damage: 20,
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479679,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581845,
			}
		}
	]
}

export default card

