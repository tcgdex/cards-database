import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Pikachu",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",

	set: Set,
	dexId: [25],
	hp: 60,
	types: ["Lightning"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				fr: "Queue de Fer"
			},
			damage: "20×",
			effect: {
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479769,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581863,
			}
		}
	]
}

export default card

