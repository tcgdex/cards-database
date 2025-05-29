import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Herdier"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lillipup"
	},

	description: {
		en: "Herdier is a very smart and friendly Pokémon.\nSo much so that there's a theory that Herdier was\nthe first Pokémon to partner with people."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card