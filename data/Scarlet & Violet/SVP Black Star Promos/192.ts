import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Fuecoco",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [909],
	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	illustrator: "Ito Kyoko",

	attacks: [
		{
			cost: ["Fire"],

			name: {
				en: "Tackle",
			},

			damage: "20"
		},
	],

	retreat: 2,
	regulationMark: "G",

	variants:[
		{
			type: "holo",
			stamp: ["horizons"]
		}
	]
}

export default card
