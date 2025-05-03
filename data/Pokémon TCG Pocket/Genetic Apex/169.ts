import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoran♂"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Peck"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "The horn on a male Nidoran's forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.",
	}
}

export default card
