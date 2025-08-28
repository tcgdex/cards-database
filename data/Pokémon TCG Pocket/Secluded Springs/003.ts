import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Jumpluff ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		en: "Skiploom"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Breeze-By Attack"
		},

		damage: 70,
		cost: ["Colorless"],

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card