import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Buzzwole ex",
		fr: "Mouscoto-ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Punch",
			fr: "Koud'Poing"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Big Beat",
			fr: "Breakbeat"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't use Big Beat.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Breakbeat."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
