import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		es: "Tangrowth",
		it: "Tangrowth",
		pt: "Tangrowth",
		de: "Tangoloss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
		es: "Tangela",
		it: "Tangela",
		pt: "Tangela",
		de: "Tangela"
	},

	stage: "Stage1",
	retreat: 4,

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}]
}

export default card