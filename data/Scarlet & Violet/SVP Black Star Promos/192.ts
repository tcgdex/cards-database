import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Fuecoco",
		pt: "Fuecoco",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],

			name: {
				en: "Tackle",
				pt: "Investida"
			},

			damage: 20
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],	

	retreat: 2,
	regulationMark: "G"
}

export default card