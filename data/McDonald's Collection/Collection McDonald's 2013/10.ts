import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		fr: "Baggiguane",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [559],
	hp: 60,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Botte Secrète",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: "10+",
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 361730,
			}
		}
	]
}

export default card
