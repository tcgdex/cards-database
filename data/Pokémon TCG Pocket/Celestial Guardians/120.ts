import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Escavalier"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Karrablast"
	},

	description: {
		en: "Wearing the shell covering they stole from Shelmet, they defend themselves and attack with two lances."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Pike"
		},

		damage: 30,
		cost: ["Metal"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card