import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		fr: "Zorua",
	},
	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [570],
	hp: 50,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				fr: "Collision",
			},
			damage: 10,
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				fr: "Botte Secrète",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
			damage: "20+",
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
				cardmarket: 361731,
			}
		}
	]
}

export default card
