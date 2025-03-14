import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito",
		pt: "Sprigatito",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				en: "Scratch",
				pt: "Arranhão"
			},

			damage: 10
		},
		{
			cost: ["Grass", "Colorless"],

			name: {
				en: "Leafage",
				pt: "Folhagem"
			},

			damage: 20
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],	

	retreat: 1,
	regulationMark: "G"
}

export default card