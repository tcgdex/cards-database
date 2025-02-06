import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Arbok"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: {
		en: "Ekans"
	},


	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Corner"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "The latest research has determined that there are over 20 possible arrangements of the patterns on its stomach.",
	}
}

export default card
