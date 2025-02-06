import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Kirlia"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Ralts"
	},

	description: {
		en: "It has a psychic power that enables it to distort the space around it and see into the future."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slap"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
