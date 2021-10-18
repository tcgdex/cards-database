import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Zoroark)'

const card: Card = {
	set: Set,

	name: {
		en: "Purrloin",
		fr: "Chacripan",
		es: "Purrloin",
		it: "Purrloin",
		pt: "Purrloin",
		de: "Felilou"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}]
}

export default card