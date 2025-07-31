import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Feraligatr"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Croconaw"
	},

	description: {
		en: "It usually moves slowly, but it goes at blinding\nspeed when it attacks and bites prey."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Destructive Whirlpool"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card