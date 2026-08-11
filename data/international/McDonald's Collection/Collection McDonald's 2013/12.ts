import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		'fr-fr': "Évoli",
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
				'fr-fr': "Attaque Surprise",
			},
			effect: {
				'fr-fr': "Lancez une pièce. Si c̕ est pile, cette attaque ne fait rien",
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
