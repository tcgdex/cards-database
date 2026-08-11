import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jumpluff ex",
		'fr-fr': "Cotovol-ex"
	},

	illustrator: "takashi shiraishi",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [189],
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Skiploom"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Breeze-By Attack",
			'fr-fr': "Attaque Zéphyr"
		},

		damage: 70,
		cost: ["Colorless"],

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card