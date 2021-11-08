import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	set: Set,

	name: {
		en: "Swanna",
		fr: "Lakmécygne",
		es: "Swanna",
		it: "Swanna",
		pt: "Swanna",
		de: "Swaroness"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Ducklett",
		fr: "Couaneton",
		es: "Ducklett",
		it: "Ducklett",
		pt: "Ducklett",
		de: "Piccolente"
	},

	stage: "Stage1",
	retreat: 0,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}]
}

export default card