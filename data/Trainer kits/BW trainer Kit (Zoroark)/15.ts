import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [520],
	set: Set,

	name: {
		en: "Tranquill",
		fr: "Colombeau",
		es: "Tranquill",
		it: "Tranquill",
		pt: "Tranquill",
		de: "Navitaub"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
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

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Gust"
		},
		damage: 20
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Quick Attack"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		},
		damage: "20+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	description: {
		en: "It can return to its Trainer's location regardless of the distance separating them."
	},

	retreat: 1,
}

export default card
