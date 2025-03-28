import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Omanyte"
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Helix Fossil"
	},


	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.",
	}
}

export default card
