import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Torterra"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		en: "Grotle"
	},

	description: {
		en: "Ancient people imagined that beneath the ground dwelt a gigantic Torterra."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Frenzy Plant"
		},

		damage: 150,
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't use ."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card
