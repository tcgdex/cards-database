import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Sandile",
		fr: "Mascaïman"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "It submerges itself in sand and moves as if\nswimming. This wise behavior keeps its enemies\nfrom finding it and maintains its temperature.",
		fr: "Ce Pokémon avance tapi dans le sable, ce qui lui permet de se cacher des prédateurs et de maintenir sa température corporelle."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card