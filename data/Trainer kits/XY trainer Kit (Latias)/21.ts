import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Lombre",
		fr: "Lombre",
		es: "Lombre",
		it: "Lombre",
		pt: "Lombre",
		de: "Lombrero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
		es: "Lotad",
		it: "Lotad",
		pt: "Lotad",
		de: "Loturzel"
	},

	stage: "Stage1",
	retreat: 2,

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}]
}

export default card