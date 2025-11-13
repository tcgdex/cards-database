import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Aggron",
		fr: "Galeking"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		en: "Lairon"
	},

	description: {
		en: "Aggron has a horn sharp enough to perforate\nthick iron sheets. It brings down its opponents by\nramming into them horn first.",
		fr: "Il terrasse ses ennemis en chargeant et en donnant des coups avec ses cornes acérées capables de transpercer des plaques de fer épaisses."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Giga Impact",
			fr: "Giga Impact"
		},

		damage: 150,
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card