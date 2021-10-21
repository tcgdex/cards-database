import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "kirisAki",
	category: "Pokemon",

	description: {
		en: "This Pokémon keeps its heat-sensitive head cool with ice. It fishes for its food, dangling its single hair into the sea to lure in prey."
	},

	stage: "Basic",

	name: {
		en: "Eiscue"
	},

	rarity: "None",
	dexId: [875],
	hp: 120,
	types: ["Water"],

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

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card