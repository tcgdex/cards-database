import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [306],
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Lairon"
	},

	description: {
		'en-us': "Aggron has a horn sharp enough to perforate\nthick iron sheets. It brings down its opponents by\nramming into them horn first.",
		'fr-fr': "Il terrasse ses ennemis en chargeant et en donnant des coups avec ses cornes acérées capables de transpercer des plaques de fer épaisses."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Giga Impact",
			'fr-fr': "Giga Impact"
		},

		damage: 150,
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card