import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Herdier",
		'fr-fr': "Ponchien"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [507],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Lillipup"
	},

	description: {
		'en-us': "Herdier is a very smart and friendly Pokémon.\nSo much so that there's a theory that Herdier was\nthe first Pokémon to partner with people.",
		'fr-fr': "Ce Pokémon est très intelligent et affectueux. Une théorie avance qu'il aurait été le premier à devenir le partenaire d'un être humain."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
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