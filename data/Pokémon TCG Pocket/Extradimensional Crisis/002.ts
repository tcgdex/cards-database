import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Lilligant"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Petilil"
	},

	description: {
		en: "The fragrance of the garland on its head has<br />a relaxing effect, but taking care of it is very<br />difficult."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cut"
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card