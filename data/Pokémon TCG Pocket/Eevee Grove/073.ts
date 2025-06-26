import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Glaceon"
	},

	illustrator: "Fujimoto Gold",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It can control its body temperature at will.\nThis enables it to freeze the moisture in the\natmosphere, creating flurries of diamond dust."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Ice Blade"
		},

		cost: ["Water", "Water"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card