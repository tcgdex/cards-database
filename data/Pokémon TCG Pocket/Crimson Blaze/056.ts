import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon"
	},

	illustrator: "Hisao Nakamura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "State-of-the-art technology was used to create\nPorygon. It was the first artificial Pokémon to be\ncreated via computer programming."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stiffen"
		},

		cost: ["Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card