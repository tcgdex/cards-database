import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Eiscue"
	},

	illustrator: "kirisAki",
	rarity: "None",
	category: "Pokemon",
	dexId: [875],
	hp: 120,
	types: ["Water"],

	description: {
		en: "This Pokémon keeps its heat-sensitive head cool with ice. It fishes for its food, dangling its single hair into the sea to lure in prey."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Ice Bonus"
		},

		effect: {
			en: "Discard a Water Energy card from your hand. If you do, draw 3 cards."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Headbutt Bounce"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card