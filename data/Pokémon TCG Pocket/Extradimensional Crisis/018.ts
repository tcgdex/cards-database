import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Emolga",
		fr: "Emolga"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "As Emolga flutters through the air, it crackles\nwith electricity. This Pokémon is cute, but it can\ncause a lot of trouble.",
		fr: "Il virevolte dans le ciel en libérant des gerbes d'électricité. Son vol est gracieux, mais peut s'avérer dangereux."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Static Shock",
			fr: "Choc Statique"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card