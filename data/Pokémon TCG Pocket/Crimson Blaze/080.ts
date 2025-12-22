import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Steelix ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	evolveFrom: {
		en: "Onix"
	},

	description: {
		en: "To protect itself from opponents' attacks, it uses\nmagnetism to control pieces of its hard outer\nshell that have flaked off."
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Adamantine Rolling"
		},

		damage: 120,
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes  damage from attacks and has no Weakness."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card