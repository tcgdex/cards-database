import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Probopass ex"
	},

	illustrator: "Masa",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		en: "Nosepass"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Defensive Unit"
		},

		damage: 90,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card