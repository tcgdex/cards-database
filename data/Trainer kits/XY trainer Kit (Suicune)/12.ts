import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	set: Set,

	name: {
		en: "Seaking",
		fr: "Poissoroy",
		es: "Seaking",
		it: "Seaking",
		pt: "Seaking",
		de: "Golking"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
		es: "Goldeen",
		it: "Goldeen",
		pt: "Goldeen",
		de: "Goldini"
	},

	stage: "Stage1",
	retreat: 2,

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}]
}

export default card