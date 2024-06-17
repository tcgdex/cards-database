import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Excadrill)'

const card: Card = {
	dexId: [529],
	set: Set,

	name: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	resistances: [{
		type: "Lightning",
		value: "-20"
	}]
}

export default card