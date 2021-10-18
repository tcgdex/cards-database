import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Sylveon)'

const card: Card = {
	set: Set,

	name: {
		en: "Granbull",
		fr: "Granbull",
		es: "Granbull",
		it: "Granbull",
		pt: "Granbull",
		de: "Granbull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fairy"],

	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},

	stage: "Stage1",
	retreat: 3,

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}]
}

export default card