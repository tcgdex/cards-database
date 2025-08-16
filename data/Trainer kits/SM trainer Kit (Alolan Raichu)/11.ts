import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		en: "Zubat",
		fr: "Nosferapti",
		es: "Zubat",
		it: "Zubat",
		pt: "Zubat",
		de: "Zubat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 152864
	}
}

export default card