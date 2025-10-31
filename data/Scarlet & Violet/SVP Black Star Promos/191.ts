import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [906],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	illustrator: "Yamazaki Rei",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				en: "Scratch",
			},

			damage: "10"
		},
		{
			cost: ["Grass", "Colorless"],

			name: {
				en: "Leafage",
			},
			damage: "20",
		}
	],

	retreat: 1,
	regulationMark: "G",

	variants:[
		{
			type: "holo",
			stamp: ["horizons"]
		}
	]
}

export default card
