import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	set: Set,

	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		es: "Rhyhorn",
		it: "Rhyhorn",
		pt: "Rhyhorn",
		de: "Rihorn"
	},

	stage: "Stage1",
	retreat: 4,

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}]
}

export default card