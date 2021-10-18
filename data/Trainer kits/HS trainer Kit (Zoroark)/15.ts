import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Zoroark)'

const card: Card = {
	set: Set,

	name: {
		en: "Tranquill",
		fr: "Colombeau",
		es: "Tranquill",
		it: "Tranquill",
		pt: "Tranquill",
		de: "Navitaub"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidove",
		fr: "Poichigeon",
		es: "Pidove",
		it: "Pidove",
		pt: "Pidove",
		de: "Dusselgurr"
	},

	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}]
}

export default card