import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dialga ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Metallic Turbo"
		},

		damage: 30,
		cost: ["Metal", "Metal"],

		effect: {
			en: "Take 2 {M} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon."
		}
	}, {
		name: {
			en: "Heavy Impact"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card