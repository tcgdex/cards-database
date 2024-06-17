import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	dexId: [67],
	set: Set,

	name: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
		es: "Machop",
		it: "Machop",
		pt: "Machop",
		de: "Machollo"
	},

	stage: "Stage1",
	retreat: 2,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}]
}

export default card