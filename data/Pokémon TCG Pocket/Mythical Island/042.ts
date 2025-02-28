import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Primeape"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mankey"
	},

	description: {
		en: "It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Punch"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
