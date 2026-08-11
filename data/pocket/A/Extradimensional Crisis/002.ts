import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lilligant",
		'fr-fr': "Fragilady"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [549],
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Petilil"
	},

	description: {
		'en-us': "The fragrance of the garland on its head has\na relaxing effect, but taking care of it is very\ndifficult.",
		'fr-fr': "La fleur sur sa tête émet un parfum qui apaise instantanément, mais elle est très difficile à entretenir."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Cut",
			'fr-fr': "Coupe"
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