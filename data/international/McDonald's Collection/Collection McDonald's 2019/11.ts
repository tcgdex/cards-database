import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Sulfura",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Hitoshi Ariga",

	set: Set,
	dexId: [146],
	hp: 120,
	types: ["Fire"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	attacks: [
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				fr: "Cru-Aile"
			},
			damage: 70,
		},
		{
			cost: ["Fire",  "Colorless","Colorless", "Colorless"],
			name: {
				fr: "Piqué"
			},
			damage: 150,
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479724,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581854,
			}
		}
	]
}

export default card

