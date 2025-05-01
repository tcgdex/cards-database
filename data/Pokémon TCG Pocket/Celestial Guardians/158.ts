import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tsareena"
	},

	illustrator: "Ligton",
	rarity: "One Star",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Steenee"
	},

	description: {
		en: "This Pokémon is proud and aggressive. However, it is said that a Tsareena will instantly become calm if someone touches the crown on its calyx."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Three Kick Combo"
		},

		damage: "50x",
		cost: ["Grass"],

		effect: {
			en: "Flip 3 coins. This attack does 50 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
