import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Volcarona"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Larvesta"
	},

	description: {
		en: "Its burning body causes it to be unpopular in hot parts of the world, but in cold ones, Volcarona is revered as an embodiment of the sun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Volcanic Ash"
		},

		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Discard 2 <span class=\"energy-text energy-text--type-fire\"></span> Energy from this Pokémon. This attack does 80 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
