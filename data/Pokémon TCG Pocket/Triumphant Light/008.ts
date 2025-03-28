import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi"
	},

	description: {
		en: "After absorbing plenty of sunlight, Cherrim takes<br />this form. It's full of energy while it's like this,<br />and its liveliness will go on until sundown."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leech Seed"
		},

		damage: 60,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Heal 20 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card