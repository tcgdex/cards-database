import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Beedrill ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		en: "Kakuna"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Crushing Spear"
		},

		damage: 80,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card