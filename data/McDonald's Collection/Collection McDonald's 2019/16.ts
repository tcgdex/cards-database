import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Stari",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Yukiko Baba",

	set: Set,
	dexId: [120],
	hp: 60,
	types: ["Water"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Attaque Tournante"
			},
			damage: 10,
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479749,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581859,
			}
		}
	]
}

export default card

