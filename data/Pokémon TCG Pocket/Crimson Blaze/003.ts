import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		en: "Ivysaur"
	},

	description: {
		en: "A bewitching aroma wafts from its flower.\nThe fragrance becalms those engaged\nin a battle."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Poisonous Whip"
		},

		damage: 90,
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card