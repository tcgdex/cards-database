import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [519],
	set: Set,

	name: {
		en: "Pidove",
		fr: "Poichigeon",
		es: "Pidove",
		it: "Pidove",
		pt: "Pidove",
		de: "Dusselgurr"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Quick Attack"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 10 more damage."
		},
		damage: "10+"
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
		en: "Each follows its Trainer's orders as best it can, but they sometimes fail to understand complicated commands."
	},

	retreat: 1,
}

export default card
