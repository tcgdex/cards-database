import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Tsareena"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Steenee"
	},

	description: {
		en: "This Pokémon is proud and aggressive. However, it is\nsaid that a Tsareena will instantly become calm if\nsomeone touches the crown on its calyx."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Kick Down"
		},

		damage: 50,
		cost: ["Grass"],

		effect: {
			en: "Your opponent reveals a random card from their hand and shuffles it into their deck."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card