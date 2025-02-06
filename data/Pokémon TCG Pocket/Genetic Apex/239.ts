import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Cubone"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Growl"
		},

		effect: {
			en: "During your opponent's next turn, attacked used by the Defending Pokémon do -20 damage"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star",

	description: {
		en: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
	}
}

export default card
