import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoking"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	stage: "Stage2",
	evolveFrom: {
		en: "Nidorino"
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Poison Horn"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		},

		damage: "90"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,
	rarity: "One Star",

	description: {
		en: "When it goes on a rampage, it's impossible to control. But in the presence of a Nidoqueen it's lived with for a long time, Nidoking calms down.",
	}
}

export default card
