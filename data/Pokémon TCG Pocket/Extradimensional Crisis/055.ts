import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Herdier",
		fr: "Ponchien"
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
		en: "Herdier is a very smart and friendly Pokémon.\nSo much so that there's a theory that Herdier was\nthe first Pokémon to partner with people.",
		fr: "Ce Pokémon est très intelligent et affectueux. Une théorie avance qu'il aurait été le premier à devenir le partenaire d'un être humain."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
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