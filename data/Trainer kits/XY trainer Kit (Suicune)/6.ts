import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	dexId: [657],
	set: Set,

	name: {
		en: "Frogadier",
		fr: "Croâporal",
		es: "Frogadier",
		it: "Frogadier",
		pt: "Frogadier",
		de: "Amphizel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
		es: "Froakie",
		it: "Froakie",
		pt: "Froakie",
		de: "Froxy"
	},

	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}]
}

export default card