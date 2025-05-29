import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Aggron"
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
		en: "Aggron has a horn sharp enough to perforate<br />thick iron sheets. It brings down its opponents by<br />ramming into them horn first."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Giga Impact"
		},

		damage: 150,
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card