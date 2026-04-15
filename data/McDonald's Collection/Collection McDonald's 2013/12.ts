import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		fr: "Évoli",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Attaque Surprise",
			},
			effect: {
				fr: "Lancez une pièce. Si c̕ est pile, cette attaque ne fait rien",
			},
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 361732,
			}
		}
	]
}

export default card

