import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			en: "Mega Drain"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: "80"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
		es: "Ivysaur",
		it: "Ivysaur",
		pt: "Ivysaur",
		de: "Bisaknosp"
	}
}

export default card
