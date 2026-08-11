import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Évoli",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Atsuko Nishida",

	set: Set,
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Ronge"
			},
			damage: 20,
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479874,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581895,
			}
		}
	]
}

export default card

